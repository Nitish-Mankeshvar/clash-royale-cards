const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', 'views');
app.set('view engine', 'ejs');

//using public files
app.use(express.static(path.join(__dirname, 'public')));

//All Routes
const landingRouter = require('./routers/user/landing');
const adminRouter = require('./routers/admin/admin');

app.use(landingRouter);
app.use('/admin', adminRouter);

//If no router exists...
app.use((req, res, next) => {
  res.end('Sorry no such URL exists Try using only navigation URLs');
});

sequelize
  .sync()
  // .sync({ force: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
