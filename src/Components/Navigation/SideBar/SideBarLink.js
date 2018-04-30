import React from 'react';
import propTypes from 'prop-types'
import { ListItem, Avatar, FontIcon } from 'react-md';
import { NavLink } from 'react-router-dom'

const SideBarLink = props => (
    <NavLink exact to={`/${props.locale}/${props.link}`} >
        <ListItem
            leftAvatar={<Avatar icon={<FontIcon>{props.icon}</FontIcon>} />}
            primaryText={props.primaryText}
            active={props.active}
        />
    </NavLink>
);

SideBarLink.propTypes = {
    primaryText: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    active: propTypes.bool.isRequired,
    locale: propTypes.string.isRequired
}

export default SideBarLink;