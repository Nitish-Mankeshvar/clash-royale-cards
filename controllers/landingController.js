// Route : "/", Method => GET
exports.getLandingPage = (req, res, next) => {
  res.end('Hello from app');
};
