import React from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

export interface FormInputProps {
  name: string;
  type: string;
  label: string;
  error?: boolean;
  disabled?: boolean;
}

const FormInput = ({
  name,
  type,
  label,
  error,
  disabled,
}: FormInputProps): JSX.Element => (
  <div>
    <Label text={label} htmlFor={name} error={error} disabled={disabled} />
    <Input
      name={name}
      type={type}
      id={name}
      error={error}
      disabled={disabled}
    />
  </div>
);

export default FormInput;
