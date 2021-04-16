const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.fetchProducts((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "shopView",
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchProducts((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "products",
    });
  });
};

// get the param ID from the URL
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      pageTitle: product.title,
      path: "products",
      product: product,
    });
  });
};

exports.getCartItems = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchProducts((products) => {
      const cartProduct = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProduct.push({
            productData: product,
            qty: cartProductData.qty,
          });
        }
      }
      res.render("shop/cart", {
        pageTitle: "Cart Items",
        path: "cartView",
        products: cartProduct,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart')
  });
};

exports.getCheckOut = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Checkout Items",
    path: "checkOutView",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "ordersView",
  });
};
