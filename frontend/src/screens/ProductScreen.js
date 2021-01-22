import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
    
    // the intial state of a product is an empty object
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const fetchProduct = async() =>{
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[match]) 

    /*  For each product, we will create a row. 
        The row has three columns: Image, ListGroup, and a Card
    */
    return (
        <>
            <Link className = 'btn btn-light my-3' to = '/'>Go Back</Link>
            <Row>
                {/* md = {6}, when we are using a middle screen, take half of the row */}
                <Col md = {6}>
                    <Image src = {product.image} alt = {product.name} fluid/>
                </Col>
                {/* md = {3}, when we are using a middle screen, take 25% of the row */}
                <Col md = {3}>
                    <ListGroup variant = 'flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* We create our last column, which will be the add to cart stuff
                    Create a card and wrap in it a list group
                    In each list group item, create another row and two columns in it*/}
                <Col md = {3}>
                    <Card>
                        <ListGroup variant = 'flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong> ${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className = 'btn-block' type ='button' disabled = {product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
