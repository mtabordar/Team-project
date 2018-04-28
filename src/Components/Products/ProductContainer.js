import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Product from './Product'
import QuantityDisplay from '../QuantityDisplay/QuantityDisplay'

import Data from '../../Api/Data'
import './ProductContainer.css'

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Data,
            filterParameter: props.match.params.category
        }
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filterParameter: nextProps.match.params.category
        });
    }

    render() {
        const filtered = FilterProducts(this.state.products, this.state.filterParameter);

        return (
            <div className="ProductContainer">
                <QuantityDisplay show={filtered.length} hide={this.state.products.length - filtered.length} />
                {filtered.map(function (product) {
                    return <Product key={product.id} {...product} />;
                })}
            </div>
        );
    }
}

function FilterProducts(products, filterParameter) {
    if (filterParameter) {
        return products.filter(product => product.categories.includes(filterParameter));
    } else {
        return products;
    }
}

export default ProductContainer