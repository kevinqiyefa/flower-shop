import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../Logo';
import styles from './style.module.scss';

// eslint-disable-next-line react/prop-types
const Header = ({ drawerToggleClicked }) => (
  <header className={cx(styles.Header, 'global-margin')}>
    <DrawerToggle clicked={drawerToggleClicked} />

    <Logo />
    {/* navagaiton items go here */}

    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

Header.prototype = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default Header;
