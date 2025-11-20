import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response.util';
import { HTTP_STATUS, ERROR_MESSAGES } from '../constants/index.constants';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || ERROR_MESSAGES.INTERNAL_ERROR;

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', {
      message: err.message,
      stack: err.stack,
      statusCode,
    });
  }

  return sendError(res, message, statusCode);
};

