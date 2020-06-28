const BasicCard = require('../modal/BasicCard');

//Route => admin/add-card | method => GET
exports.addCard = (req, res, next) => {
  res.render('adminPages/addCard');
};

exports.addPostCard = (req, res, next) => {
  const { cardName, imageUrl } = req.body;
  BasicCard.create({
    cardName,
    imageUrl,
  })
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
