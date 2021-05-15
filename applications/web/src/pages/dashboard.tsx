import React from 'react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/client';
import Layout from '../components/Layout';

const DashboardPage: NextPage = () => {
  const [session] = useSession();

  if (session) {
    console.log(session);
  }

  return (
    <Layout>
      Dashboard for testing NextAuth session. Take a look in the console for
      logging of session object.
    </Layout>
  );
};

export default DashboardPage;
