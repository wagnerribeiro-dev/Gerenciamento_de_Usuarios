import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  userId?: string;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  // Supondo que você tem um token JWT e decodifica o payload
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded: any = jwt.verify(token, 'your_secret_key');
    req.userId = decoded.id; // Agora isso não deve gerar erro
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
