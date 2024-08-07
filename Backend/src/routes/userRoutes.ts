import { Router, Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { getUsers, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
import handleValidationErrors from '../middleware/handleValidationErrors';

const router = Router();

// Middleware para validar as entradas
const validateUser = [
  body('username')
    .isString().withMessage('O nome de usuário deve ser uma string')
    .notEmpty().withMessage('O nome de usuário é obrigatório'),
  body('password')
    .isString().withMessage('A senha deve ser uma string')
    .notEmpty().withMessage('A senha é obrigatória')
];

const validateLogin = [
  body('username')
    .isString().withMessage('O nome de usuário deve ser uma string')
    .notEmpty().withMessage('O nome de usuário é obrigatório'),
  body('password')
    .isString().withMessage('A senha deve ser uma string')
    .notEmpty().withMessage('A senha é obrigatória')
];

// Rotas com validação
router.get('/users', authMiddleware, getUsers);

router.post('/users',
  validateUser,
  handleValidationErrors,
  createUser
);

router.put('/users/:id',
  authMiddleware,
  validateUser,
  handleValidationErrors,
  updateUser
);

router.delete('/users/:id', authMiddleware, deleteUser);

router.post('/login',
  validateLogin,
  handleValidationErrors,
  loginUser
);

export default router;
