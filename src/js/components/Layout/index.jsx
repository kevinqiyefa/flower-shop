import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchCategory } from '../../store/actions';
import { Header, SideDrawer } from '..';
import styles from './style.module.scss';

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const slug = useSelector((state) => state.category.category.slug, shallowEqual);
  const dispatch = useDispatch();

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const initialDataFetch = () => {
    if (!slug) {
      dispatch(fetchCategory('all'));
    }
  };

  useEffect(() => {
    initialDataFetch();
  }, []);

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
