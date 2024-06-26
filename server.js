// Import necessary modules
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()
const express = require('express')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')

// Initialize express app
const app = express()

// Set the port from environment variables or default to 5050
const port = process.env.PORT || 5050

// Enable CORS for all routes
app.use(cors())

// Uncomment the following line to enable logging of requests
//app.use(morgan('dev'))

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended: false}))

// Middleware to parse cookies
app.use(cookieParser())

// Routes for authentication
app.use('/auth', require('./routes/authRoute'))

// Routes for products
app.use('/products', require('./routes/productRoute'))

// Routes for carts
app.use('/carts', require('./routes/cartRoute'))

// Routes for orders
app.use('/orders', require('./routes/orderRoute'))

// Middleware for handling 404 errors (not found)
app.use(notFound)

// Middleware for handling other errors
app.use(errorHandler)

// Start the server and connect to the database
app.listen(port, ()=>{
    connectDb()
    console.log(`Listening to ${port}`);
})
