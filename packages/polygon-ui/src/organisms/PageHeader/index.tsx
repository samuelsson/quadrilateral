import React from 'react';
import cn from 'classnames';
import styles from './PageHeader.module.scss';
import NavBar from '../../molecules/NavBar';
import Logo from '../../atoms/Logo';

export interface PageHeaderProps {
  navItems: JSX.Element[];
  floating?: boolean;
  fluid?: boolean;
  logoLink?: string;
}

const PageHeader = ({
  navItems,
  floating,
  fluid,
  logoLink,
}: PageHeaderProps): JSX.Element => {
  const floatingClass = floating && styles.floating;
  const fluidClass = fluid && styles.fluid;

  return (
    <header className={cn(styles.PageHeader, floatingClass)}>
      <div className={cn(styles.container, fluidClass)}>
        <Logo link={logoLink} />
        <NavBar navItems={navItems} />
        <div>user/login</div>
      </div>
    </header>
  );
};

export default PageHeader;
