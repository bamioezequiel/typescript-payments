import jwt, { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const generateToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '3h',
  });
};

export const verifyToken = (jwt: string) => { 
    return verify(jwt, JWT_SECRET);
}