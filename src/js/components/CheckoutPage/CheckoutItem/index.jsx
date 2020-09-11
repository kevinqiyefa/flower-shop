import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../../store/actions/cart';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const addCartItem = (item) => {
    dispatch(addItem(item));
  };

  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

  const clearItemFromCart = (item) => {
    dispatch(clearItem(item));
  };

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.itemImageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={styles.itemName}>{name}</span>
      <span className={styles.itemQuantities}>
        <div className={styles.arrow} onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className={styles.quantityValue}>{quantity}</span>
        <div className={styles.arrow} onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={styles.itemPrice}>{price}</span>
      <div className={styles.clearItemBtn} onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CheckoutItem;
