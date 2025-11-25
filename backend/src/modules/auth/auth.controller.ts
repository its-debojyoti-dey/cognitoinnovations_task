// import { Request, Response, NextFunction } from 'express';
// import { authService } from './auth.service';
// import { sendSuccess, sendError } from '../../common/utils/response.util';
// import { HTTP_STATUS } from '../../common/constants/index.constants';
// import { LoginDto, RegisterDto } from './auth.types';

// export class AuthController {
//   async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const registerData: RegisterDto = req.body;
//       const authResponse = await authService.register(registerData);
//       return sendSuccess(res, authResponse, 'User registered successfully', HTTP_STATUS.CREATED);
//     } catch (error) {
//       next(error);
//     }
//   }

//   async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const loginData: LoginDto = req.body;
//       const authResponse = await authService.login(loginData);
//       return sendSuccess(res, authResponse, 'Login successful');
//     } catch (error) {
//       next(error);
//     }
//   }

//   async validateToken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const token = req.headers.authorization?.replace('Bearer ', '') || req.body.token;

//       if (!token) {
//         return sendError(res, 'Token is required', HTTP_STATUS.UNAUTHORIZED);
//       }

//       const payload = await authService.validateToken(token);

//       if (!payload) {
//         return sendError(res, 'Invalid token', HTTP_STATUS.UNAUTHORIZED);
//       }

//       return sendSuccess(res, { valid: true, payload }, 'Token is valid');
//     } catch (error) {
//       next(error);
//     }
//   }
// }

// export const authController = new AuthController();
