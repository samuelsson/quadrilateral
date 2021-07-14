import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { CallbacksOptions } from 'next-auth';
import jsonwebtoken, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import Providers, { AppProviders } from 'next-auth/providers';
import { JWTOptions } from 'next-auth/jwt';
import axios from 'axios';

import { AuthResponse, MutationLoginArgs, User } from '../../../types/graphql';

interface LoginResponse {
  data: {
    login: AuthResponse;
  };
}

const providers: AppProviders = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials: MutationLoginArgs): Promise<User | null> => {
      const url = process.env.API_URL || '';
      const body = {
        query: `
          mutation($username: String!, $password: String!) {
            login(username: $username, password: $password) {
              user {
                id,
                roles,
                username,
              }
              token
            }
          }
        `,
        variables: {
          username: credentials.username,
          password: credentials.password,
        },
      };

      const headers = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await axios.post<LoginResponse>(url, body, headers);

        if (response?.data?.data?.login?.user) {
          return response.data.data.login.user;
        }
      } catch {
        return null;
      }

      return null;
    },
  }),
];

const callbacks: CallbacksOptions = {
  // Types for NextAuth has an hard-coded User Type, so our custom one
  // doesn't work. Will probably be changed into a generic sometime.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async session(session, user: User) {
    return {
      ...session,
      user: {
        id: user.id,
        roles: user.roles,
        username: user.username,
      },
    };
  },
  // Types for NextAuth has an hard-coded User Type, so our custom one
  // doesn't work. Will probably be changed into a generic sometime.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async jwt(token, user) {
    if (user) {
      return user;
    }

    return token;
  },
};

const jwt: JWTOptions = {
  // Types for NextAuth has an hard-coded User Type, so our custom one
  // doesn't work. Will probably be changed into a generic sometime.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  encode: async ({ secret, token, maxAge }) => {
    const jwtClaims = {
      id: token?.id,
      roles: token?.roles,
      username: token?.username,
    };

    const options: SignOptions = {
      algorithm: 'HS512',
      expiresIn: maxAge,
    };
    return jsonwebtoken.sign(jwtClaims, secret, options);
  },
  // Types for NextAuth has an hard-coded User Type, so our custom one
  // doesn't work. Will probably be changed into a generic sometime.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decode: async ({ secret, token }): Promise<User> => {
    const options: VerifyOptions = {
      algorithms: ['HS512'],
    };

    // Types for NextAuth has an hard-coded User Type, so our custom one
    // doesn't work. Will probably be changed into a generic sometime.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return jsonwebtoken.verify(token, secret, options);
  },
};

const options = {
  providers,
  callbacks,
  secret: process.env.JWT_SECRET,
  jwt,
};

export default (
  req: NextApiRequest,
  res: NextApiResponse
): void | Promise<void> => NextAuth(req, res, options);
