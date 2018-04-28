import React, { Component } from 'react';
import { Button, bem } from 'react-md';
import PropTypes from 'prop-types';

const base = 'not-found';

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
                <h4 className={bem(base, 'display', {}, 'md-display-2')}>Uhhh...</h4>
                <h4 className={bem(base, 'headline', {}, 'md-headline')}>Looks like the page can not be found.</h4>
                <Button
                    id="return-home"
                    className={bem(base, 'return-home')}
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