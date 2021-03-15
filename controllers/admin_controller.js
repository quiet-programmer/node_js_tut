const Product = require('../models/product')

exports.getAddProductPage = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('admin/add-product', {
        pageTitle: 'Add New Products',
        path: 'productView',
    })
}

exports.getAdminProductsPage = (req, res, next) => {
    Product.fetchProducts((products) => {
        res.render('admin/admin-product-list', {
            prods: products,
            pageTitle: 'Admin Products',
            path: 'adminProductView',
        })
    })
}

exports.postAddProdcts = (req, res, next) => {
    if(req.body.title === "") {
        res.redirect('/')
    } else {
        const title = req.body.title
        const imageUrl = req.body.imageUrl
        const description = req.body.description
        const price =- req.body.price
        const product = new Product(title, imageUrl, description, price)
        product.save()
        res.redirect('/')
    }
}