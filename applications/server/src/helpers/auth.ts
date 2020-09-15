import { Request } from 'express';
import { AuthChecker } from 'type-graphql';
import jwt from 'jsonwebtoken';
import { User, UserRole } from '../models/User';

const { JWT_SECRET, JWT_EXPIRE_TIME } = process.env;

interface JwtPayload {
  id: string;
  roles: UserRole[];
}

interface Context {
  user: JwtPayload | null;
}

export const generateJwtToken = ({ id, roles }: User): string => {
  const payload: JwtPayload = { id, roles };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE_TIME });
};

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { user } = context;

  // @Authorized()
  // Required to be minimum logged in - user is logged in (roles don't matter)
  if (!roles.length) {
    return !!user;
  }

  // @Authorized('XXX')
  // Needs a specific role - user is logged in and has that role
  return user && user.roles.some((role) => roles.includes(role));
};

export const getContext = (req: Request): Context => {
  const authorization = req.get('Authorization');

  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    return { user: jwtPayload };
  }

  return { user: null };
};
