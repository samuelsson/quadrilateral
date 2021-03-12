import React from 'react';
import styles from './NavItem.module.scss';

export interface NavItemProps {
  link: JSX.Element;
}

const NavItem = ({ link }: NavItemProps): JSX.Element => (
  <li className={styles.NavItem}>{link}</li>
);

export default NavItem;
