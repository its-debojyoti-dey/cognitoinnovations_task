import { Response } from 'express';
import { ApiResponse } from '../types/index.types';

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message?: string,
  statusCode: number = 200
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

export const sendError = (
  res: Response,
  message: string,
  statusCode: number = 400
): Response => {
  const response: ApiResponse = {
    success: false,
    error: message,
  };
  return res.status(statusCode).json(response);
};

