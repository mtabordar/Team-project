import React, { Component } from 'react';
import { TabsContainer, Tabs, Tab, Toolbar } from 'react-md';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import './TopMenu.css'

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0
        }
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    handleTabChange = (activeTabIndex, tabId) => {
        this.setState({ currentTabIndex: activeTabIndex })
        let path = tabId === "Home" ? "" : tabId;
        this.props.history.push(`/${path}`);
    }

    render() {
        return (
            <div>
                <Toolbar themed className="md-background--primary">
                    <TabsContainer className="tab--center" activeTabIndex={this.state.currentTabIndex} onTabChange={this.handleTabChange}>
                        <Tabs tabId="TopMenuTabs" className="md-background--primary" >
                            <Tab label="HOME" id="Home" />
                            <Tab label="PRODUCTS" id="products" />
                            <Tab label="CLIENTS" id="clients" />
                            <Tab label="CONTACT" id="contacts" />
                        </Tabs>
                    </TabsContainer>
                </Toolbar>
            </div>
        );
    }
}

export default withRouter(TopMenu);