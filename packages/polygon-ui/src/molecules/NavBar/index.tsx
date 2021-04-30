import React from 'react';
import styles from './NavBar.module.scss';

export interface NavBarProps {
  navItems: JSX.Element[];
}

const NavBar = ({ navItems }: NavBarProps): JSX.Element => (
  <ul className={styles.NavBar}>
    {navItems.map((navItem, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li className={styles.NavItem} key={index}>
        {navItem}
      </li>
    ))}
  </ul>
);

export default NavBar;
