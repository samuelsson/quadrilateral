import React from 'react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/client';

const DashboardPage: NextPage = () => {
  const [session] = useSession();

  if (session) {
    console.log(session);
  }

  return (
    <div>
      Dashboard for testing NextAuth session. Take a look in the console for
      logging of session object.
    </div>
  );
};

export default DashboardPage;
