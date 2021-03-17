import React from 'react';
import styles from './Default.module.scss';

export interface DefaultTemplateProps {
  children: React.ReactNode;
  header: JSX.Element;
  footer?: JSX.Element;
}

const DefaultTemplate = ({
  children,
  header,
  footer,
}: DefaultTemplateProps): JSX.Element => (
  <div className={styles.DefaultTemplate}>
    {header}
    <main className={styles.Main}>{children}</main>
    {footer}
  </div>
);

export default DefaultTemplate;
