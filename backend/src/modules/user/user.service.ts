import { CreateUserDto, UpdateUserDto, UserResponse } from "./user.types";
import { AppError } from "../../common/middleware/errorHandler.middleware";
import { HTTP_STATUS } from "../../common/constants/index.constants";
import { UserModel } from "../../models";

export class UserService {
  async createUser(data: CreateUserDto): Promise<UserResponse> {
    const existingUser = await UserModel.findOne({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new AppError(
        "User with this email already exists",
        HTTP_STATUS.CONFLICT
      );
    }

    if (!data.password) {
      throw new AppError("Password is required", HTTP_STATUS.BAD_REQUEST);
    }

    const user = await UserModel.create({
      email: data.email,
      name: data.name,
      password: data.password,
    });

    return this.mapToResponse(user);
  }

  async getUserById(id: string): Promise<UserResponse> {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS.NOT_FOUND);
    }
    return this.mapToResponse(user);
  }

  async getAllUsers(): Promise<UserResponse[]> {
    const users = await UserModel.findAll();
    return users.map((user) => this.mapToResponse(user));
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserResponse> {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS.NOT_FOUND);
    }

    if (data.email && data.email !== user.email) {
      const existingUser = await UserModel.findOne({
        where: { email: data.email },
      });
      if (existingUser) {
        throw new AppError(
          "User with this email already exists",
          HTTP_STATUS.CONFLICT
        );
      }
    }

    await user.update({
      email: data.email ?? user.email,
      name: data.name ?? user.name,
    });

    return this.mapToResponse(user);
  }

  async deleteUser(id: string): Promise<void> {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS.NOT_FOUND);
    }
    await user.destroy();
  }

  private mapToResponse(user: UserModel): UserResponse {
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
