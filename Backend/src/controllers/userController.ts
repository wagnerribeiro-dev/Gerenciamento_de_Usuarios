import { Request, Response } from 'express';
import User from '../models/userModel';
import { generateToken } from '../utils/jwtUtils';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.username = username;
  if (password) {
    user.password = password;
  }

  await user.save();
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  await user.destroy();
  res.status(204).send();
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !(await user.validatePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user.id);
  res.json({ token });
};
