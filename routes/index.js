const express = require('express');
const { getUsers } = require('../controllers/userController');
const productRoutes = require('./products');

const router = express.Router();

router.get('/users', getUsers);
router.use('/products', productRoutes);

module.exports = router;
