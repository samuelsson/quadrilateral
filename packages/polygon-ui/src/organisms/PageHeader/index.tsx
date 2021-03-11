import React from 'react';
import cn from 'classnames';
import styles from './PageHeader.module.scss';

export interface PageHeaderProps {
  floating?: boolean;
}

const PageHeader = ({ floating }: PageHeaderProps): JSX.Element => {
  const floatingClass = floating && styles.floating;

  return <header className={cn(styles.PageHeader, floatingClass)} />;
};

export default PageHeader;
