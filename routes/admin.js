const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/edit-product/productId => GET, To get one product details for editing
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product => POST, To edit one product details
router.post('/edit-product', adminController.postEditProduct);

// /admin/delete-product => POST, To delete one product
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
