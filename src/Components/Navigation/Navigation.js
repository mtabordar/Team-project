import React, { Component } from 'react';

import TopMenu from './TopMenu/TopMenu'
import SideBar from './SideBar/SideBar'

class Navigation extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <SideBar />
            </div>
        );
    }
}

export default Navigation;