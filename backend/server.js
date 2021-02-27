import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
/*
	Middleware is a function that has access to the req,res cycle
	next => move to the next piece of middleware 

*/
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

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.POST || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
	),
);
