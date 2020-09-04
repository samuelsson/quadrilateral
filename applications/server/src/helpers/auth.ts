import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const { JWT_SECRET, JWT_EXPIRE_TIME } = process.env;

interface JwtPayload {
  id: string;
}

export const generateJwtToken = (user: User): string => {
  const payload: JwtPayload = {
    id: user.id,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE_TIME });
};
