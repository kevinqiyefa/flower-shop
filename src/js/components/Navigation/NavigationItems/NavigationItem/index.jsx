import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const NavigationItem = ({ link, exact, children }) => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
};

export default NavigationItem;
