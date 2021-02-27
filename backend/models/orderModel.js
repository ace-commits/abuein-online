import mongoose from "mongoose";

//this is the schema of each order
const orderSchema = mongoose.Schema(
	{
		// we will also have a user connected to the schema (this is the customer/ user who did the order)
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		//orderItems: will be an array of ordered items (products)
		orderItems: [
			{
				// name of the product
				name: {
					type: String,
					required: true,
				},
				// qty: quantity ordered
				qty: {
					type: Number,
					required: true,
				},
				// image of the product
				image: {
					type: String,
					required: true,
				},
				// price
				price: {
					type: Number,
					required: true,
				},
				// product linked to the productModel
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: "Product",
				},
			},
		],
		deliveryAddress: {
			address: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			postalCode: {
				type: String,
				required: false,
			},
			governorate: {
				type: String,
				required: true,
			},
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		// this result comes from paypal if the payment is successful or not
		paymentResult: {
			id: { type: String },
			// status if it is paid or not
			status: { type: String },
			// payment time
			update_time: { type: String },
			// email address from paypal
			email_address: { type: String },
		},
		taxPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		deliveryPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		// if the order was paid
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},
		deliveredAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	},
);

// create the user model using the userSchema above
const Order = mongoose.model("Order", orderSchema);
export default Order;
