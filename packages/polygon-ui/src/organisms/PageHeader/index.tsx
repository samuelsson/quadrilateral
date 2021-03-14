import React from 'react';
import cn from 'classnames';
import styles from './PageHeader.module.scss';
import NavBar from '../../molecules/NavBar';
import Logo from '../../atoms/Logo';

export interface PageHeaderProps {
  floating?: boolean;
  navItems: JSX.Element[];
}

const PageHeader = ({ floating, navItems }: PageHeaderProps): JSX.Element => {
  const floatingClass = floating && styles.floating;

  return (
    <header className={cn(styles.PageHeader, floatingClass)}>
      <Logo />
      <NavBar navItems={navItems} />
      <div>user/login</div>
    </header>
  );
};

export default PageHeader;
