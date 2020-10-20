import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface InputProps {
  name: string;
  type: string;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}

const Input = ({
  name,
  type,
  id,
  disabled,
  error,
  placeholder,
}: InputProps): JSX.Element => (
  <input
    name={name}
    type={type}
    id={id}
    disabled={disabled}
    placeholder={placeholder}
    className={cn(styles.Input, error && styles.Error)}
  />
);

export default Input;
