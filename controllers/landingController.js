// Route : "/", Method => GET
exports.getLandingPage = (req, res, next) => {
  res.render('userPages/landing');
};

exports.getAllCards = (req, res, next) => {
  res.render('userPages/all-cards', {
    cards: [
      {
        name: 'Three Musketeers',
        img:
          'https://cdn.statsroyale.com/images/cards/full/three_musketeers.png',
        id: '1',
      },
      {
        name: 'Golem',
        img: 'https://cdn.statsroyale.com/images/cards/full/chr_golem.png',
        id: '2',
      },
    ],
  });
};

exports.getSingleCard = (req, res, next) => {
  const cardId = req.params.id;
  console.log(cardId);
  res.render('userPages/singleCard');
};
