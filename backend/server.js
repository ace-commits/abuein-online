import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
/*	config will read your .env file, parse the contents
	assign it to process.env, and return an Object with 
	a parsed key containing the loaded content or an error 
	key if it failed.
*/
dotenv.config();

connectDB();

app.get("/", (req, res) => {
	res.send("API is running...");
});

// this way we have less code in our server file and use specific routes
app.use("/api/products", productRoutes);

/* Creating 404 error middleware */
app.use((req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(400);
	next(error);
});

/* Creating error middleware */
app.use((err, req, res, next) => {
	// if it is equal to 200, make it 500 error
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		//if we are in production, the stack is null, else, the stack is err.stack
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
});
const PORT = process.env.POST || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
	),
);
