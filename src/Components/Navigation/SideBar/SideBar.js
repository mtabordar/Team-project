import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { List, ListItem, Subheader, Avatar, FontIcon, Divider, Drawer } from 'react-md';

class SideBar extends Component {
    render() {
        return (
            <div>
                <Drawer>
                    <List>
                        <Subheader primaryText="Categories" />
                        <Divider />
                        <NavLink to="/products">
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>list</FontIcon>} />}
                                primaryText="All"
                            />
                        </NavLink>
                        <Divider />
                        <NavLink to="/products/Tech">
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>laptop</FontIcon>} />}
                                primaryText="Tech"
                            />
                        </NavLink>
                        <NavLink to="/products/Services">
                            <ListItem
                                leftAvatar={<Avatar icon={<FontIcon>build</FontIcon>} />}
                                primaryText="Service"
                            />
                        </NavLink>
                        <NavLink to="/products/Office">
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

export default SideBar;