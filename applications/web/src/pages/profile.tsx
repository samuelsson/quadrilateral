import React from 'react';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { gql, useQuery } from 'urql';
import { createUrqlClient } from '../utils/urqlClient';
import Layout from '../components/Layout';

const ProfilePage: NextPage = () => {
  const ProfileQuery = gql`
    query {
      profile {
        username
      }
    }
  `;

  const [result] = useQuery({ query: ProfileQuery });

  return (
    <Layout>
      {result.data ? (
        <div>Profile for user: {result.data.profile.username}</div>
      ) : (
        <div>Not logged in from back-end</div>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(ProfilePage);
