import React from 'react';
import Input, { InputProps } from '../../atoms/Input';
import Label from '../../atoms/Label';

export interface FormInputProps extends InputProps {
  label: string;
}

const FormInput = ({
  name,
  type,
  value,
  label,
  error,
  disabled,
  onChange,
}: FormInputProps): JSX.Element => (
  <div>
    <Label text={label} htmlFor={name} error={error} disabled={disabled} />
    <Input
      name={name}
      type={type}
      value={value}
      id={name}
      error={error}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
