const express = require('express');
const songController = require('../controllers/controller');

const router = express.Router();

router.post('/', songController.getSongs);

module.exports = router;