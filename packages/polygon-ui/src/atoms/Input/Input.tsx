import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface InputProps {
  name: string;
  type: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}

const Input = ({
  name,
  type,
  value,
  onChange,
  id,
  disabled,
  error,
  placeholder,
}: InputProps): JSX.Element => {
  const [val, setVal] = React.useState<string>(value || '');

  const internalOnChange = React.useCallback(
    ({ target }): void => {
      setVal(target.value);
      if (onChange) {
        onChange(name, target.value);
      }
    },
    [name, onChange]
  );

  useEffect((): void => {
    setVal(value || '');
  }, [value]);

  return (
    <input
      name={name}
      type={type}
      value={val}
      id={id}
      onChange={internalOnChange}
      disabled={disabled}
      placeholder={placeholder}
      className={cn(styles.Input, error && styles.Error)}
    />
  );
};

export default Input;
