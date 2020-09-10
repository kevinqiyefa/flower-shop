import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Product = ({ product: { imageUrl, name, price }, onClick }) => {
  return (
    <div className={styles.Product} onClick={onClick}>
      <img src={imageUrl} alt="" />
      <div className={styles.ProductInfo}>
        <h3>{name}</h3> <h3>${price}</h3>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
