const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-game', adminController.getAddGame);

router.post('/add-game', adminController.postGame);

router.post('/edit-game', adminController.postEditGame);

router.get('/edit-game/:gameId', adminController.getEditGame);

router.post('/delete', adminController.postDelete);

router.get('/:gameId', adminController.getGame);

module.exports = router;