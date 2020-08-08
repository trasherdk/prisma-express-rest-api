import { body, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validate = (schemas: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(schemas.map((schema) => schema.run(req)));

    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }

    const errors = result.array();
    return res.status(400).json(errors);
  };
};

export const createUserSchema = [
  body('name', 'Name is required').notEmpty(),
  body('email', 'Email is required').notEmpty(),
];

export const createPostSchema = [
  body('title', 'Title is required').notEmpty(),
  body('authorId', 'Author is required').notEmpty(),
];
