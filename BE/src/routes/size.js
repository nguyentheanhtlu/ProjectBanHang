const express = require('express');

const SizeController = require('../controller/sizeController');

let router = express.Router();

router.post('/create', SizeController.create);

router.get('/list', SizeController.list);

module.exports = router;