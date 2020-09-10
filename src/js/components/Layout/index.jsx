import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <Link to="/">Product</Link>
      <Link to="/checkout">Cart</Link>
      <main className={cx(styles.mainContent, 'global-margin')}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
