import React from 'react';
import propTypes from 'prop-types'

const QuantityDisplay = props => (
    <div>
        Showing {props.show} products - Hidden {props.hide}
    </div>
);

QuantityDisplay.propTypes = {
    show: propTypes.number.isRequired,
    hide: propTypes.number.isRequired
}

export default QuantityDisplay;