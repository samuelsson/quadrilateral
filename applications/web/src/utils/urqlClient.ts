import { NextUrqlClientConfig } from 'next-urql';

export const createUrqlClient: NextUrqlClientConfig = (ssr, ctx) => {
  return {
    url: 'http://localhost:3000/api/graphql',
  };
};
