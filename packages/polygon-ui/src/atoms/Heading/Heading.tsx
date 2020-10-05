import React from 'react';
import cn from 'classnames';
import styles from './Heading.module.scss';

export interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
}

export const H1 = ({ children, center }: HeadingProps): JSX.Element => (
  <h1 className={cn(styles.H1, center && styles.Center)}>{children}</h1>
);

export const H2 = ({ children, center }: HeadingProps): JSX.Element => (
  <h2 className={cn(styles.H2, center && styles.Center)}>{children}</h2>
);

export const H3 = ({ children, center }: HeadingProps): JSX.Element => (
  <h3 className={cn(styles.H3, center && styles.Center)}>{children}</h3>
);

export const H4 = ({ children, center }: HeadingProps): JSX.Element => (
  <h4 className={cn(styles.H4, center && styles.Center)}>{children}</h4>
);

export const H5 = ({ children, center }: HeadingProps): JSX.Element => (
  <h5 className={cn(styles.H5, center && styles.Center)}>{children}</h5>
);

export const H6 = ({ children, center }: HeadingProps): JSX.Element => (
  <h6 className={cn(styles.H6, center && styles.Center)}>{children}</h6>
);
