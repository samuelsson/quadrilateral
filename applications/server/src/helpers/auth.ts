import { Request } from 'express';
import { AuthChecker } from 'type-graphql';
import jwt, { Algorithm, SignOptions, VerifyOptions } from 'jsonwebtoken';
import { User, UserRole } from '../models/User';

const { JWT_SECRET, JWT_EXPIRE_TIME, JWT_ALGORITHM } = process.env;

export interface JwtPayload {
  id: string;
  roles: UserRole[];
  username: string;
}

export interface Context {
  user: JwtPayload | null;
}

export const getTokenFromRequest = (req: Request): string | undefined => {
  // Using NextAuth.js session token sent with cookie instead of Bearer.
  const tokenRegex = /next-auth\.session-token=(\S+)/;
  const cookie = req.get('cookie');

  if (cookie && cookie.match(tokenRegex)?.length > 1) {
    return cookie.match(tokenRegex)[1];
  }

  return undefined;
};

export const decodeToken = (token: string | undefined): JwtPayload => {
  if (token) {
    const options: VerifyOptions = {
      algorithms: [JWT_ALGORITHM as Algorithm],
    };

    try {
      return jwt.verify(token, JWT_SECRET, options) as JwtPayload;
    } catch {
      return null;
    }
  }

  return null;
};

export const generateJwtToken = ({ id, roles, username }: User): string => {
  const payload: JwtPayload = { id, roles, username };
  const options: SignOptions = {
    expiresIn: JWT_EXPIRE_TIME,
    algorithm: JWT_ALGORITHM as Algorithm,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export const authChecker: AuthChecker<Context, UserRole> = (
  { context },
  roles
) => {
  const { user } = context;

  // @Authorized()
  // Required to be minimum logged in - user is logged in (roles don't matter)
  if (!roles.length) {
    return !!user;
  }

  // @Authorized('XXX')
  // Needs a specific role - user is logged in and has that role
  return !!user && user.roles.some((role) => roles.includes(role));
};

export const getContext = (req: Request): Context => {
  const token = getTokenFromRequest(req);
  const jwtPayload = decodeToken(token);

  return { user: jwtPayload };
};
