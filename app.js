const path = require('path')

const express = require('express')

// routing in express
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

// setting the default template engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//body-parser already added to express
app.use(express.urlencoded({extended: false})) // this is for body parsing

// this gives you access to the public folder in the porject
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.route) // page for admin
app.use(shopRoutes) // page for shops

// page for 404 Page not Found
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404', {
    pageTitle: '404 Page not found'
  })
})

app.listen(3000)
