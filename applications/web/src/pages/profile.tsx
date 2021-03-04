import React from 'react';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { gql, useQuery } from 'urql';
import { createUrqlClient } from '../utils/urqlClient';

const ProfilePage: NextPage = () => {
  const ProfileQuery = gql`
    query {
      profile {
        username
        id
        roles
      }
    }
  `;

  const [result] = useQuery({ query: ProfileQuery });

  return result.data ? (
    <div>Profile for {result.data.profile.username}</div>
  ) : (
    <div>Not logged in from back-end</div>
  );
};

export default withUrqlClient(createUrqlClient)(ProfilePage);
