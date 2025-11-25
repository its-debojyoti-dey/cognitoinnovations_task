// import {
//   LoginDto,
//   RegisterDto,
//   AuthResponse,
//   TokenPayload,
// } from "./auth.types";
// import { userService } from "../user/user.service";
// import { AppError } from "../../common/middleware/errorHandler.middleware";
// import { HTTP_STATUS } from "../../common/constants/index.constants";
// import { UserModel } from "../../models";

// // Mock token generation (replace with JWT in production)
// const generateToken = (payload: TokenPayload): string => {
//   return `mock_token_${payload.userId}_${Date.now()}`;
// };

// export class AuthService {
//   async register(data: RegisterDto): Promise<AuthResponse> {
//     const user = await userService.createUser({
//       email: data.email,
//       name: data.name,
//       password: data.password,
//     });

//     const token = generateToken({
//       userId: user.id,
//       email: user.email,
//     });

//     return {
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//       },
//     };
//   }

//   async login(data: LoginDto): Promise<AuthResponse> {
//     if (!data.password) {
//       throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
//     }

//     const user = await UserModel.findOne({ where: { email: data.email } });

//     if (!user) {
//       throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
//     }

//     const isValidPassword = await user.comparePassword(data.password);
//     if (!isValidPassword) {
//       throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
//     }

//     const token = generateToken({
//       userId: user.id,
//       email: user.email,
//     });

//     return {
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//       },
//     };
//   }

//   async validateToken(token: string): Promise<TokenPayload | null> {
//     // In production, verify JWT token
//     // For now, just parse mock token
//     if (!token.startsWith("mock_token_")) {
//       return null;
//     }

//     // Extract user info from mock token (in production, decode JWT)
//     const parts = token.split("_");
//     if (parts.length < 3) {
//       return null;
//     }

//     // This is a mock implementation
//     // In production, decode and verify JWT
//     return {
//       userId: parts[2] || "",
//       email: "user@example.com", // Would come from decoded token
//     };
//   }
// }

// export const authService = new AuthService();
