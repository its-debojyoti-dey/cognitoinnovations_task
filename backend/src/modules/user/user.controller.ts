// import { Request, Response, NextFunction } from 'express';
// import { userService } from './user.service';
// import { sendSuccess, sendError } from '../../common/utils/response.util';
// import { HTTP_STATUS } from '../../common/constants/index.constants';
// import { CreateUserDto, UpdateUserDto } from './user.types';

// export class UserController {
//   async createUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const userData: CreateUserDto = req.body;
//       const user = await userService.createUser(userData);
//       return sendSuccess(res, user, 'User created successfully', HTTP_STATUS.CREATED);
//     } catch (error) {
//       next(error);
//     }
//   }

//   async getUserById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const { id } = req.params;
//       const user = await userService.getUserById(id);
//       return sendSuccess(res, user, 'User retrieved successfully');
//     } catch (error) {
//       next(error);
//     }
//   }

//   async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const users = await userService.getAllUsers();
//       return sendSuccess(res, users, 'Users retrieved successfully');
//     } catch (error) {
//       next(error);
//     }
//   }

//   async updateUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const { id } = req.params;
//       const userData: UpdateUserDto = req.body;
//       const user = await userService.updateUser(id, userData);
//       return sendSuccess(res, user, 'User updated successfully');
//     } catch (error) {
//       next(error);
//     }
//   }

//   async deleteUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
//     try {
//       const { id } = req.params;
//       await userService.deleteUser(id);
//       return sendSuccess(res, null, 'User deleted successfully', HTTP_STATUS.NO_CONTENT);
//     } catch (error) {
//       next(error);
//     }
//   }
// }

// export const userController = new UserController();
