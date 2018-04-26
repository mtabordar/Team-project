import React, { Component } from 'react';
import { List, ListItem, Subheader, Avatar, FontIcon, Divider, Drawer } from 'react-md';

class SideBar extends Component {
    render() {
        return (
            <diV>
                <Drawer>
                    <List>
                        <Subheader primaryText="Categories" />
                        <Divider />
                        <ListItem
                            leftAvatar={<Avatar icon={<FontIcon>list</FontIcon>} />}
                            primaryText="All"
                        />
                        <Divider />
                        <ListItem
                            leftAvatar={<Avatar icon={<FontIcon>laptop</FontIcon>} />}
                            primaryText="Tech"
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<FontIcon>build</FontIcon>} />}
                            primaryText="Service"
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                            primaryText="Office"
                        />
                    </List>
                </Drawer>
            </diV>
        );
    }
}

export default SideBar;