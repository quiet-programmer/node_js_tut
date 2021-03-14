// const path = require('path')

const express = require('express')

const router = express.Router()

// const rootDir = require('../utils/path')

const products = []

// a get request
router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {
        pageTitle: 'Add New Products',
        path: 'productView',
        activeProduct: true,
        productCSS: true,
        formCSS: true,
        activeProduct: true,
    })
})
  
// a post request
router.post('/add-product', (req, res, next) => {
    if(req.body.title === "") {
        res.redirect('/')
    } else {
        products.push({title: req.body.title})
        res.redirect('/')
    }
})

exports.route = router
exports.products = products