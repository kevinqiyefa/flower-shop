import React from 'react';
import HeroSection from './HeroSection';
import CategoriesDropdown from './CategoriesDropdown';

import styles from './style.module.scss';
import ProductList from './ProductList';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.CatergoriesFilter}>
        <h3>Catergory By </h3>
        <CategoriesDropdown />
      </div>

      <ProductList />
    </>
  );
};

export default HomePage;
