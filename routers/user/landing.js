const express = require('express');
const router = express.Router();

const landingController = require('../../controllers/landingController');

router.get('/', landingController.getLandingPage);

router.get('/all-cards', landingController.getAllCards);

router.get('/card/more-info/:id', landingController.getSingleCard);

module.exports = router;
