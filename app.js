const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//All Routes
const landingRouter = require('./routers/landing');

app.use(landingRouter);

//No router exists...
app.use((req, res, next) => {
  res.end('Sorry no such route exists');
});

app.listen(3000);
