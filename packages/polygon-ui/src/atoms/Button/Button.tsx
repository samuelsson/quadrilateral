import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  name,
  onClick,
  type,
  disabled,
}: ButtonProps): JSX.Element => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    name={name}
    onClick={onClick}
    disabled={disabled}
    className={styles.Button}
  >
    {children}
  </button>
);

export default Button;
