import React, { Component } from 'react';

import TopMenu from './TopMenu/TopMenu'
import SideBar from './SideBar/SideBar'

class Navigation extends Component {
    render() {
        return (
            <diV>
                <TopMenu />
                <SideBar />
            </diV>
        );
    }
}

export default Navigation;