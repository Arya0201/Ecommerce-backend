// Middleware to handle 404 Not Found errors
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error); // Pass the error to the next middleware
};

// Middleware to handle all other errors
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode; // Set status code to 500 if not already set
    res.status(statusCode);
    res.json({ msg: err?.message, stack: err?.stack }); // Send JSON response with error message and stack trace
};

// Export the middleware functions to be used in other parts of the application
module.exports = { notFound, errorHandler };
