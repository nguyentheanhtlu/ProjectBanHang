const express = require('express');

const ColorController = require('../controller/colorController');

let router = express.Router();

router.post('/create', ColorController.create);

router.get('/list', ColorController.list);

module.exports = router;