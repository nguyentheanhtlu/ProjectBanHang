const express = require('express');

const FeedbackController = require('../controller/feedbackController');
const jwtAuth = require('../middlewares/jwtAuth');

let router = express.Router();

router.get('/list/:product_id', FeedbackController.list);

router.get('/detail/:product_variant_id', jwtAuth, FeedbackController.detail);

router.post('/create', jwtAuth, FeedbackController.create);

router.put('/update', jwtAuth, FeedbackController.update);

module.exports = router;