import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

// eslint-disable-next-line react/prop-types
const DrawerToggle = ({ clicked }) => {
  return (
    <div className={styles.DrawerToggle} onClick={clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.prototype = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
