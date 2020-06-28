const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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

app.listen(3000);
