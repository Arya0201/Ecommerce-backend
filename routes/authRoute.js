// Import necessary modules
const router = require('express').Router();
const { userRegister, loginUser } = require('../controllers/authController');

// Route to register a new user
router.post('/register', userRegister);

// Route to authenticate and log in a user
router.post('/login', loginUser);

// Example routes that can be added in the future:
// router.post('/logout', logoutUser);
// router.get('/refresh', handleRefreshToken);

// Export the router to be used in other parts of the application
module.exports = router;
