import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { List, ListItem, Subheader, Avatar, FontIcon, Divider, Drawer } from 'react-md';

class SideBar extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    render() {
        const [currentLocale, path] = this.props.location.pathname.split('/')
        const locale = currentLocale ? currentLocale : path;

        return (
            <div>
                <Drawer>
                    <List>
                        <Subheader primaryText="Categories" />
                        <Divider />
                        <NavLink exact to={`/${locale}`} >
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>list</FontIcon>} />}
                                primaryText="All"
                                active
                            />
                        </NavLink>
                        <Divider />
                        <NavLink exact to={`/${locale}/Tech`}>
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>laptop</FontIcon>} />}
                                primaryText="Tech"
                            />
                        </NavLink>
                        <NavLink exact to={`/${locale}/Services`}>
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>build</FontIcon>} />}
                                primaryText="Service"
                            />
                        </NavLink>
                        <NavLink exact to={`/${locale}/Office`}>
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                                primaryText="Office"
                            />
                        </NavLink>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(SideBar);