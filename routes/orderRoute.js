// Import the necessary controller functions and middleware
const { createOrder, getUserOrders, deleteOrder, updateOrderStatus } = require('../controllers/orderController')
const { validateToken } = require('../middlewares/validateTokenHandler')

// Create a new router instance
const router = require('express').Router()

// Route to create a new order (requires user authentication)
router.post('/', validateToken, createOrder)

// Route to get orders for a specific user (requires user authentication)
router.get('/user-orders', validateToken, getUserOrders)

// Export the router to be used in other parts of the application
module.exports = router
