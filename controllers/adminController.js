//Route => admin/add-card | method => GET
exports.addCard = (req, res, next) => {
  res.render('adminPages/addCard');
};

exports.addPostCard = (req, res, next) => {
  const { cardName, imageUrl } = req.body;
  console.log(cardName, imageUrl);
  res.redirect('/');
};
