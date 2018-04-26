import React, { Component } from 'react';
import { Button, bem } from 'react-md';
const base = 'not-found';

class NotFound extends Component {
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