import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={styles.Button}
  >
    {children}
  </button>
);

export default Button;
