import React from 'react';
import noMatchImg from '../../../assets/images/404.png';
import styles from './style.module.scss';

function NoMatchPage() {
  return (
    <div className={styles.notFoundImg}>
      <img src={noMatchImg} alt="404 Not Found!" />
    </div>
  );
}

export default NoMatchPage;
