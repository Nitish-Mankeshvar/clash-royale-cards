// Route : "/", Method => GET
exports.getLandingPage = (req, res, next) => {
  res.render('landing');
};

exports.getAllCards = (req, res, next) => {
  res.end('All cards');
};
