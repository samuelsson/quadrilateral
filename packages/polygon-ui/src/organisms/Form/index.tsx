import React from 'react';
import styles from './Form.module.scss';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

// For now this is just a styling wrapper but will evolve into its own component

const Form = ({ children, onSubmit }: FormProps): JSX.Element => (
  <form className={styles.Form} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
