import React from 'react';
import CheckoutItem from './CheckoutItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/selectors/cart';
import styles from './style.module.scss';
import ScrollToTop from '../Utils/scrollToTop';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <>
      <ScrollToTop />
      <div className={styles.checkoutPage}>
        <div className={styles.checkoutHeader}>
          <div className={styles.headerBlock}>
            <span>Product</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Name</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Quantity</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Price</span>
          </div>
          <div className={styles.headerBlock}>
            <span>Clear</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className={styles.total}>TOTAL: ${total}</div>
      </div>
    </>
  );
};

export default CheckoutPage;
