import React, { Component } from 'react';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { List, Subheader, Divider, Drawer } from 'react-md';

import SideBarLink from './SideBarLink'
import Menu from '../../../Constants/SideBarNavigationItems'

class SideBar extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    render() {
        const [currentLocale, path] = this.props.location.pathname.split('/')
        const locale = currentLocale ? currentLocale : path;
        const fullpath = this.props.location.pathname;
        const menu = Menu.map(function (menuItem) {
            menuItem.active = fullpath === `/${locale}${menuItem.link ? '/' : ''}${menuItem.link}`;
            return menuItem
        })

        return (
            <div>
                {locale === "products" &&
                    <Drawer>
                        <List>
                            <Subheader primaryText="Categories" />
                            {menu.map(menuItem =>
                                menuItem.divider ? <Divider key={menuItem.key} />
                                    : <SideBarLink key={menuItem.key} locale={locale} {...menuItem} />
                            )}
                        </List>
                    </Drawer>
                }
            </div>
        );
    }
}

export default withRouter(SideBar);