// const path = require('path')

const express = require('express')

const router = express.Router()

// const rootDir = require('../utils/path')
const adminData = require('./admin')

router.get('/',(req, res, next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    const products = adminData.products
    var nProdusts = products.length > 0 ? true : false
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: 'shopView',
        hasProducts: nProdusts,
        activeShop: true,
        formCSS: true,
        productCSS: true,
    })
})

module.exports = router