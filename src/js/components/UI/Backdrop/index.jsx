import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Backdrop = ({ show, clicked }) => {
  return show ? <div className={styles.Backdrop} onClick={clicked} /> : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
