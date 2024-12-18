const express = require('express');

const CustomerController = require('../controller/customerController');
const jwtAuth = require('../middlewares/jwtAuth');

let router = express.Router();

router.post('/register', CustomerController.register);

router.post('/login', CustomerController.login);

router.post('/logout', CustomerController.logout);

router.post('/refresh', CustomerController.refreshAccessToken);

router.get('/infor', jwtAuth, CustomerController.getInfor);

router.put('/update', jwtAuth, CustomerController.update);

module.exports = router;