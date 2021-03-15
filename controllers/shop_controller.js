const Product = require('../models/product')

exports.getIndex = (req, res, next) => {
    Product.fetchProducts((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: 'shopView',
        })
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchProducts((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: 'prodcuts',
        })
    })
}

exports.getCartItems = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart Items',
        path: 'cartView',
    })
}

exports.getCheckOut = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Checkout Items',
        path: 'checkOutView',
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: 'ordersView',
    })
}