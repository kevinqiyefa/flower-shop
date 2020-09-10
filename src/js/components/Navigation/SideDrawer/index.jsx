import React from 'react';
import cx from 'classnames';
import NavigationItems from '../NavigationItems';
import { Backdrop, Logo } from '../..';
import styles from './style.module.scss';

const sideDrawer = ({ open, close }) => {
  return (
    <>
      <Backdrop show={open} clicked={close} />
      <div
        className={cx(styles.SideDrawer, { [styles.Open]: open, [styles.Close]: !open })}
        onClick={close}
      >
        <div className={styles.SideDrawerLogo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
