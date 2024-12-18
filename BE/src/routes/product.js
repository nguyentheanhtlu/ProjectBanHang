const express = require('express');

const ProductController = require('../controller/productController');

let router = express.Router();

router.post('/create', ProductController.create);

router.put('/update', ProductController.update);

router.get('/admin/list', ProductController.listAdminSide);

router.get('/customer/list', ProductController.listCustomerSide);

router.get('/customer/detail/:product_id', ProductController.detailCustomerSide);

router.get('/admin/detail/:product_id', ProductController.detailAdminSide);

router.get('/customer/list-color/:product_id', ProductController.listColor);

router.get('/customer/list-size/:product_id/:color_id', ProductController.listSize);

module.exports = router;