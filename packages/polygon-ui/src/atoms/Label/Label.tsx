import React from 'react';
import cn from 'classnames';
import styles from './Label.module.scss';

export interface LabelProps {
  text: string;
  htmlFor: string;
  error?: boolean;
  disabled?: boolean;
}

const Label = ({ htmlFor, text, error, disabled }: LabelProps): JSX.Element => (
  <label
    htmlFor={htmlFor}
    className={cn(
      styles.Label,
      error && styles.Error,
      disabled && styles.Disabled
    )}
  >
    {text}
  </label>
);

export default Label;
