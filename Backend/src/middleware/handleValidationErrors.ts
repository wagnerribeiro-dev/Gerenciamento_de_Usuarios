import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Middleware para verificar erros de validação
const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export default handleValidationErrors;

