import React from 'react';
import { DefaultTemplate, PageHeader } from '@samuelsson/polygon-ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const Header = <PageHeader navItems={[]} />;

  return <DefaultTemplate header={Header}>{children}</DefaultTemplate>;
};

export default Layout;
