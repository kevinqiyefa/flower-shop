import React from 'react';
import NavigationItem from './NavigationItem';
import ShoppingBag from './ShoppingBag';
import styles from './style.module.scss';

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Products
      </NavigationItem>
      <NavigationItem link="/checkout" exact>
        <ShoppingBag />
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
