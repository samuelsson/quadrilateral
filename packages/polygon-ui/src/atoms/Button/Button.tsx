import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fluid?: boolean;
}

const Button = ({
  children,
  name,
  onClick,
  type,
  disabled,
  fluid,
}: ButtonProps): JSX.Element => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    name={name}
    onClick={onClick}
    disabled={disabled}
    className={cn(styles.Button, !!fluid && styles.fluid)}
  >
    {children}
  </button>
);

export default Button;
