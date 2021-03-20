const path = require('path')

const express = require('express')

// routing in express
const adminRoute = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')

const app = express()

// setting the default template engine
// ejs comes with express but you still need to install it
app.set('view engine', 'ejs')
app.set('views', 'views')

//body-parser already added to express
app.use(express.urlencoded({extended: false})) // this is for body parsing

// this gives you access to the public folder in the porject
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute) // page for admin
app.use(shopRoutes) // page for shops

// page for 404 Page not Found
app.use(errorController.pageNotFound)

app.listen(3000)
