import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Header, SideDrawer } from '..';
import styles from './style.module.scss';

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Header drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} close={sideDrawerClosedHandler} />
      <main className={cx(styles.mainContent, 'global-margin')}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
