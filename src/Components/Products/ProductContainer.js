import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Product from './Product'
import QuantityDisplay from '../QuantityDisplay/QuantityDisplay'

import ProductsApi from '../../Api/WebApi'
import './ProductContainer.css'

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filterParameter: ""
        }
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    }

    componentDidMount() {
        const productApi = ProductsApi("products");
        productApi.get().then(result =>
            this.setState({
                products: result,
                filterParameter: this.props.match.params.category
            })
        );
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
                {this.state.products.length > 0 &&
                    filtered.map(product => <Product key={product.id} {...product} />)}
            </div>
        );
    }
}

function FilterProducts(products, filterParameter) {
    if (filterParameter) {
        return products.filter(product => product.categories.map(category => category.toLowerCase()).includes(filterParameter));
    } else {
        return products;
    }
}

export default ProductContainer