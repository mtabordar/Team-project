import React from 'react';
import { Card, CardTitle, Media, Paper } from 'react-md'
import propTypes from 'prop-types'

import './Product.css'

const Product = props => (
    <Card className="card">
        <CardTitle title={`${props.name}`} subtitle={`${props.categories.join(', ')} - ${props.brand}`}></CardTitle>
        <div className="md-grid">
            <div className="md-cell md-cell--4 imageContainer">
                <Media aspectRatio="1-1">
                    <img src={`${props.photo}`} alt={`${props.name}`} />
                </Media>
            </div>
            <Paper zDepth={0} className="md-cell md-cell--8">
                <section>
                    {props.description}
                </section>
                <div className="productInformation">
                    <div>
                        <b>Stock:</b> {props.stock}
                    </div>
                    <div>
                        <b>Price:</b> {`$${props.price}`}
                    </div>
                </div>
            </Paper>
        </div>
    </Card>
);

Product.propTypes = {
    name: propTypes.string.isRequired,
    brand: propTypes.string.isRequired,
    categories: propTypes.array.isRequired,
    description: propTypes.string.isRequired,
    photo: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    stock: propTypes.number.isRequired
}

export default Product;