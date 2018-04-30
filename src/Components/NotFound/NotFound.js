import React, { Component } from 'react';
import { Button } from 'react-md';
import PropTypes from 'prop-types';


class NotFound extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    goHome = () => {
        this.props.history.replace('/');
    };

    render() {
        return (
            <div>
                <h2>Uhhh...</h2>
                <h3>This Tab does not match the given filters. Please change to another tab and try again.</h3>
                <Button
                    id="return-home"
                    secondary
                    raised
                    onClick={this.goHome}
                >
                    Return Home
        </Button>
            </div>
        );
    }
}

export default NotFound;