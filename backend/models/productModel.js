import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		// this is the individual review rating
		rating: {
			type: Number,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
const productSchema = mongoose.Schema(
	{
		// we put a user here to know which user created the product
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
		},
		name_arabic: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		brand_arabic: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		description_arabic: {
			type: String,
			required: true,
		},
		//an array of review objects
		reviews: [reviewSchema],
		// this is the average rating for the product
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
