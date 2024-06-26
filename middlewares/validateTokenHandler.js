const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// Middleware to validate JWT token in headers
const validateToken = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    // Check if Authorization header exists and starts with 'Bearer'
    if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1]; // Extract the token from the header

        // Verify the token using JWT
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json('Token is not valid');
            } else {
                req.user = decoded; // Store decoded user information in request object
                next(); // Move to the next middleware
            }
        });
    } else {
        // If Authorization header is missing or doesn't start with 'Bearer'
        return res.status(401).json('You are not authenticated');
    }
};

// Middleware to check if user is an admin
const AdminAuth = (req, res, next) => {
    validateToken(req, res, () => {
        if (req.user.isAdmin) {
            next(); // Allow access if user is an admin
        } else {
            res.status(403).json('Only Admin has access'); // Deny access if user is not an admin
        }
    });
};

module.exports = { validateToken, AdminAuth };
