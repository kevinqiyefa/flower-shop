import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import styles from './style.module.scss';
import { Spinner } from '../..';
import Product from './Product';

const ProductList = () => {
  const isLoading = useSelector((state) => state.category.loadingCategory, shallowEqual);
  const products = useSelector((state) => state.category.category.products) || [];

  const [index, setIndex] = useState(false);

  const getLowerestPrice = (arr) => {
    let price = Infinity;
    arr.forEach((p) => {
      let tempPrice = Math.round(p.prices.regular);
      if (tempPrice < price) {
        price = tempPrice;
      }
    });

    return price === Infinity ? 0 : price;
  };

  const productList = products.map(
    ({ id, images: [image], name, description, variants, manufacturer }) => {
      return {
        id,
        imageUrl: image.url || '',
        name,
        description,
        price: getLowerestPrice(variants),
        manufacturer,
      };
    }
  );

  const displayProductList = (list) => {
    return list.map((product, i) => (
      <Product key={product.id} product={product} onClick={() => setIndex(i)} />
    ));
  };
  return (
    <div className={styles.ProductListContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.ProductList}>{displayProductList(productList)}</div>
        </>
      )}
    </div>
  );
};

export default ProductList;
