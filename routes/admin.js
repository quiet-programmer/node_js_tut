const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin_controller')

// a get request
router.get('/add-product', adminController.getAddProductPage)
router.get('/products', adminController.getAdminProductsPage)

  
// a post request
router.post('/add-product', adminController.postAddProdcts)

router.get('/edit-product/:productId', adminController.getEidtProductPage)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)

module.exports = router
