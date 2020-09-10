import React from 'react';

import styles from './style.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <h2>Shop All</h2>

      <p>
        Flower delivery game-changer: order farm-fresh flower arrangements for birthdays,
        anniversaries, or just because!
      </p>
      <h5>$12 WEEKDAY DELIVERY</h5>
    </div>
  );
};

export default HeroSection;
