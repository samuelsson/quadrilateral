import React from 'react';
import cn from 'classnames';
import styles from './PageHeader.module.scss';
import NavBar from '../../molecules/NavBar';
import Logo from '../../atoms/Logo';
import UserInfo from '../../molecules/UserInfo';

export interface PageHeaderProps {
  navItems: JSX.Element[];
  username?: string;
  floating?: boolean;
  fluid?: boolean;
  logoLink?: string;
}

const PageHeader = ({
  navItems,
  username,
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
        {username ? <UserInfo username={username} /> : <span>login</span>}
      </div>
    </header>
  );
};

export default PageHeader;
