import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import styles from './style.module.scss';
import { Spinner } from '../..';

const ProductList = () => {
  const isLoading = useSelector((state) => state.category.loadingCategory, shallowEqual);

  return (
    <div className={styles.ProductListContainer}>
      {isLoading ? <Spinner /> : <div>productList</div>}
    </div>
  );
};

export default ProductList;
