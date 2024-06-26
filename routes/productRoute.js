// Import the necessary controller functions and middleware
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')
const { AdminAuth } = require('../middlewares/validateTokenHandler')

// Create a new router instance
const router = require('express').Router()

// Route to get all products
router.get('/', getProducts)

// Route to get a specific product by ID
router.get('/get/:id', getProduct)

// Route to create a new product (requires admin authentication)
router.post('/', AdminAuth, createProduct)

// Route to update an existing product by ID (requires admin authentication)
router.put('/:id', AdminAuth, updateProduct)

// Route to delete a product by ID (requires admin authentication)
router.delete('/:id', AdminAuth, deleteProduct)

// Export the router to be used in other parts of the application
module.exports = router
