// Route : "/", Method => GET
exports.getLandingPage = (req, res, next) => {
  res.render('landing');
};
