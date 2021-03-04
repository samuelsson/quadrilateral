import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Callbacks, InitOptions, JWTOptions } from 'next-auth';
import jsonwebtoken, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import Providers from 'next-auth/providers';
import axios from 'axios';

interface User {
  id: string;
  roles: string[];
  username: string;
}

interface LoginResponse {
  data: {
    login: {
      user: User;
    };
  };
}

interface JwtEncodeParams {
  secret: string;
  token: User;
  maxAge: number;
}

interface JwtDecodeParams {
  secret: string;
  token: string;
}

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    credentials: {},
    authorize: async (credentials): Promise<User | null> => {
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

const callbacks: Callbacks = {
  // Types for NextAuth have an hard coded user object, should be changed.
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
  async jwt(token, user) {
    if (user) {
      return user;
    }

    return token;
  },
};

const jwt: JWTOptions = {
  encode: async ({ secret, token, maxAge }: JwtEncodeParams) => {
    const jwtClaims = {
      id: token?.id,
      roles: token.roles,
      username: token.username,
    };

    const options: SignOptions = {
      algorithm: 'HS512',
      expiresIn: maxAge,
    };
    return jsonwebtoken.sign(jwtClaims, secret, options);
  },
  decode: async ({ secret, token }: JwtDecodeParams): Promise<User> => {
    const options: VerifyOptions = {
      algorithms: ['HS512'],
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return jsonwebtoken.verify(token, secret, options);
  },
};

const options: InitOptions = {
  providers,
  callbacks,
  secret: process.env.JWT_SECRET,
  jwt,
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);
