import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
	//intializing state using useState hook
	const [products, setProducts] = useState([]);

	// useEffect will fire as soon as HomeScreen loads
	useEffect(() => {
		//create a separate function to enable aysnc, wait, because axios.get returns a promise
		const fetchProducts = async () => {
			// destructuring data from the res object that you recieve from the server
			const { data } = await axios.get("/api/products");
			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<>
			<h1> Latest Products</h1>

			<Row>
				{/* For each product, we will create a column with a product component */}
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
