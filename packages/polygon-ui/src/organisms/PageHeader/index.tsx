import React from 'react';
import styles from './PageHeader.module.scss';
import NavBar from '../../molecules/NavBar';
import UserInfo from '../../molecules/UserInfo';
import logo from '../../images/logo.svg';

export interface PageHeaderProps {
  navItems: JSX.Element[];
  username?: string;
}

const Logo = (): JSX.Element => (
  <div className={styles.Logo}>
    <a href="/">
      <img src={logo} alt="Logotype" />
    </a>
  </div>
);

const PageHeader = ({ navItems, username }: PageHeaderProps): JSX.Element => {
  return (
    <header className={styles.PageHeader}>
      <div className={styles.container}>
        <Logo />
        <NavBar navItems={navItems} />
        <UserInfo username={username} />
      </div>
    </header>
  );
};

export default PageHeader;
