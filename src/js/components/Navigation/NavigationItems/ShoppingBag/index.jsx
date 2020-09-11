import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../../../store/selectors/cart';
import styles from './style.module.scss';

const ShoppingBag = () => {
  const count = useSelector(selectCartItemsCount);

  return (
    <div className={styles.cartContainer}>
      <div>{count}</div>
    </div>
  );
};

export default ShoppingBag;
