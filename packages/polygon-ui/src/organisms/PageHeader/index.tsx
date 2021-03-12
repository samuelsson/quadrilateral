import React from 'react';
import cn from 'classnames';
import styles from './PageHeader.module.scss';
import NavBar from '../../molecules/NavBar';

export interface PageHeaderProps {
  floating?: boolean;
  navItems: JSX.Element[];
}

const PageHeader = ({ floating, navItems }: PageHeaderProps): JSX.Element => {
  const floatingClass = floating && styles.floating;

  return (
    <header className={cn(styles.PageHeader, floatingClass)}>
      <NavBar navItems={navItems} />
    </header>
  );
};

export default PageHeader;
