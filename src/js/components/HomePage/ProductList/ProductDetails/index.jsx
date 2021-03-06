import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Backdrop } from '../../../../components';
import { addItem } from '../../../../store/actions';

import styles from './style.module.scss';

const ProductDetails = ({ product, close, index }) => {
  let {
    imageUrl,
    description,
    manufacturer: { name, location },
  } = product;
  const dispatch = useDispatch();

  return (
    <>
      <Backdrop show={index !== false} clicked={close} />
      <div className={styles.ProductDetailsModal}>
        <span onClick={close}>
          <i className="far fa-times-circle"></i>
        </span>
        <img src={imageUrl} alt="" className={styles.ProductDetailImg} />
        <div className={styles.manufacturerInfo}>
          <strong>{name}</strong> at <strong>{location}</strong>
        </div>
        <p className={styles.description}>{description}</p>

        <input
          type="button"
          value="Add to Cart"
          className={styles.addToCartBtn}
          onClick={() => dispatch(addItem(product))}
        />
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default ProductDetails;
