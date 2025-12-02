import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export interface AuthRequest extends Request { user?: any }

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token requerido' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
