import React, { Component } from 'react';
import { TabsContainer, Tabs, Tab, Toolbar } from 'react-md';

import './TopMenu.css'

class TopMenu extends Component {

    handleTabChange(activeTabIndex, tabId) {
        alert(tabId)
    }

    render() {
        return (
            <div>
                <Toolbar themed="true" className="md-background--primary">
                    <TabsContainer className="center" onTabChange={this.handleTabChange}>
                        <Tabs tabId="TopMenuTabs" className="md-background--primary" >
                            <Tab label="HOME" id="home" />
                            <Tab label="PRODUCTS" id="products" />
                            <Tab label="CLIENTS" id="clients" />
                            <Tab label="CONTACT" id="contact" />
                        </Tabs>
                    </TabsContainer>
                </Toolbar>
            </div>
        );
    }
}

export default TopMenu;