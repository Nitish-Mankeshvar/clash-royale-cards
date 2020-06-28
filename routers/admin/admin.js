const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/adminController');

router.get('/add-card', adminController.addCard);

router.post('/add-card', adminController.addPostCard);

module.exports = router;
