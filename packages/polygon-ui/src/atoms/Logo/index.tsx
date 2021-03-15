import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../images/logo.svg';

interface LogoProps {
  link?: string;
}

const Logo = ({ link }: LogoProps): JSX.Element => {
  return (
    <div className={styles.Logo}>
      <a href={link || '/'}>
        <img src={logo} alt="Logotype" />
      </a>
    </div>
  );
};

export default Logo;
