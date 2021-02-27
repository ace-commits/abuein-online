/* Creating 404 error middleware */
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	//set the status code to 404
	res.status(404);
	next(error);
};

/* Creating error middleware */
const errorHandler = (err, req, res, next) => {
	// if it is equal to 200, make it 500 (server) error
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		//if we are in production, the stack is null, else, the stack is err.stack
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
};

export { notFound, errorHandler };
