// Import necessary modules
const { validateToken } = require('../middlewares/validateTokenHandler');
const router = require('express').Router();
const { addItemToCart, getCart, removeItem, deleteCart, updateCartItemQuantity } = require('../controllers/cartController');

// Route to add an item to the cart (requires user authentication)
router.post('/', validateToken, addItemToCart);

// Route to get the user's cart (requires user authentication)
router.get('/get-cart', validateToken, getCart);

// Route to remove an item from the cart (requires user authentication)
router.post('/remove-cart-item', validateToken, removeItem);

// Route to update the quantity of an item in the cart (requires user authentication)
router.post('/update-cart-item-quantity', validateToken, updateCartItemQuantity);

// Route to delete the entire cart (requires user authentication)
router.delete('/delete-cart', validateToken, deleteCart);

// Export the router to be used in other parts of the application
module.exports = router;
