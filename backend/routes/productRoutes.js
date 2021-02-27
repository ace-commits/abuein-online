import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/**
 * Product Routes
 * Public routes mean that everyone can hit it
 * We are doing everything async because the DB returns a promise
 * asycnHandler is a custom error handler instead of having to do a try catch when doing http requests
 *
 **/

// @desc   Fetch all products
// @route  GET /api/products
// @access public
router.get(
	"/",
	// we used async Handler instead of having try catch statements for each route, since a request can return an error
	asyncHandler(async (req, res) => {
		// this will return all the products
		const products = await Product.find({});
		res.json(products);
	}),
);

// @desc   Fetch a single product
// @route  GET /api/products/:id
// @access public
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		// req.params.id is the id in the url
		const product = await Product.findById(req.params.id);
		// if the product exists, return its JSON text, else, product is not find and return a status page
		if (product) {
			res.json(product);
		} else {
			console.log("PRODUCT WAS NOT FOUND");
			res.status(404).json({ message: "Product not found" });
		}
	}),
);

export default router;
