import { ApiResponse } from '../common/types/index.types';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
      };
    }

    interface Response {
      apiResponse?: ApiResponse;
    }
  }
}

export {};

