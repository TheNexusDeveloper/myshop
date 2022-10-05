import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} />
            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews `} color={'#f8e825'}/>
                    </div>
                </Card.Text>
                
                <Card.Text as="h3">
                    N{product.price}
                </Card.Text>

            </Card.Body>
        </Link>
        
    </Card> 
  )
}

export default ProductCard