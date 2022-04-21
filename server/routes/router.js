const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.post('/addingSong', controller.addSong);
router.post('/removingSong', controller.removeSong);
router.post('/searchingSong', controller.search);
router.get('/:songId', controller.getSongById);
router.put('/:songId', controller.update);
router.delete('/:songId', controller.deleteById);

router.post('/logging', controller.login);
router.post('/loggingOut', controller.logout);

module.exports = router;