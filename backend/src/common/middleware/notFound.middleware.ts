import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response.util';
import { HTTP_STATUS, ERROR_MESSAGES } from '../constants/index.constants';

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return sendError(
    res,
    `${ERROR_MESSAGES.NOT_FOUND}: ${req.method} ${req.originalUrl}`,
    HTTP_STATUS.NOT_FOUND
  );
};

