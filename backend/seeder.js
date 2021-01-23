import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

//allows us to do process.env.
dotenv.config();

//connect to the database
connectDB();

//create a function to import data
// this will be asynchronous, because we are dealing with mongoose, which returns a promise for everything
const importData = async () => {
	try {
		// clear all 3 collections out entirely
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		// we want the admin user to be the object_id for all the products
		// createdUsers will be an array of all the users that were inserted into the db
		const createdUsers = await User.insertMany(users);
		// it is the fist item inserted, because it is the fist item in user.js
		const adminUser = createdUsers[0]._id;
		// using the map function, we will create a new array of all the products, however, for each product we will
		// add the admin user as the creator of the product
		// we will use the spread operator ... => this means that everything in the product object will remain the same except for the user
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});
		await Product.insertMany(sampleProducts);

		console.log("Data imported to DB!".green.inverse);
		process.exit();
	} catch (err) {
		console.error(`${err}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		// clear all 3 collections out entirely
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();
		console.log("Data DESTROYED!".red.inverse);
		process.exit();
	} catch (err) {
		console.error(`${err}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
