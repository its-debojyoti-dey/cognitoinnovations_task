import { User, CreateUserDto, UpdateUserDto, UserResponse } from './user.types';
import { AppError } from '../../common/middleware/errorHandler.middleware';
import { HTTP_STATUS } from '../../common/constants/index.constants';

// Mock data store (replace with actual database in production)
let users: User[] = [];
let idCounter = 1;

export class UserService {
  async createUser(data: CreateUserDto): Promise<UserResponse> {
    // Check if user already exists
    const existingUser = users.find((u) => u.email === data.email);
    if (existingUser) {
      throw new AppError('User with this email already exists', HTTP_STATUS.CONFLICT);
    }

    const newUser: User = {
      id: `user_${idCounter++}`,
      email: data.email,
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push(newUser);
    return this.mapToResponse(newUser);
  }

  async getUserById(id: string): Promise<UserResponse> {
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }
    return this.mapToResponse(user);
  }

  async getAllUsers(): Promise<UserResponse[]> {
    return users.map((user) => this.mapToResponse(user));
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserResponse> {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }

    // Check email uniqueness if email is being updated
    if (data.email && data.email !== users[userIndex].email) {
      const existingUser = users.find((u) => u.email === data.email);
      if (existingUser) {
        throw new AppError('User with this email already exists', HTTP_STATUS.CONFLICT);
      }
    }

    users[userIndex] = {
      ...users[userIndex],
      ...data,
      updatedAt: new Date(),
    };

    return this.mapToResponse(users[userIndex]);
  }

  async deleteUser(id: string): Promise<void> {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }
    users.splice(userIndex, 1);
  }

  private mapToResponse(user: User): UserResponse {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

export const userService = new UserService();

