import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import products from '../products';
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = (props) => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products, error, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // console.log('list', products)

    return (
        <>
            <h1>Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger' >{error}</Message> : <Row>
                {products.map((el, i) => (
                    <Col key={el._id} sm={12} ms={6} xl={3}>
                        <Product product={el} />
                    </Col>
                ))}
            </Row>}

        </>
    )
}

export default HomeScreen
