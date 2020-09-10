import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Link to="/">𝐓𝐡𝐞 𝐊.</Link>
    </div>
  );
};

export default Logo;
