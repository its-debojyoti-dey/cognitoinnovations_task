import { LoginDto, RegisterDto, AuthResponse, TokenPayload } from './auth.types';
import { userService } from '../user/user.service';
import { AppError } from '../../common/middleware/errorHandler.middleware';
import { HTTP_STATUS } from '../../common/constants/index.constants';

// Mock token generation (replace with JWT in production)
const generateToken = (payload: TokenPayload): string => {
  return `mock_token_${payload.userId}_${Date.now()}`;
};

export class AuthService {
  async register(data: RegisterDto): Promise<AuthResponse> {
    // Check if user already exists
    try {
      const existingUsers = await userService.getAllUsers();
      const existingUser = existingUsers.find((u) => u.email === data.email);
      if (existingUser) {
        throw new AppError('User with this email already exists', HTTP_STATUS.CONFLICT);
      }
    } catch (error) {
      // If getAllUsers fails, continue with registration
    }

    // Create user
    const user = await userService.createUser({
      email: data.email,
      name: data.name,
      password: data.password, // In production, hash this password
    });

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async login(data: LoginDto): Promise<AuthResponse> {
    // In production, verify password hash
    const users = await userService.getAllUsers();
    const user = users.find((u) => u.email === data.email);

    if (!user) {
      throw new AppError('Invalid email or password', HTTP_STATUS.UNAUTHORIZED);
    }

    // In production, verify password hash here
    // For now, we'll just check if user exists
    if (!data.password) {
      throw new AppError('Invalid email or password', HTTP_STATUS.UNAUTHORIZED);
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async validateToken(token: string): Promise<TokenPayload | null> {
    // In production, verify JWT token
    // For now, just parse mock token
    if (!token.startsWith('mock_token_')) {
      return null;
    }

    // Extract user info from mock token (in production, decode JWT)
    const parts = token.split('_');
    if (parts.length < 3) {
      return null;
    }

    // This is a mock implementation
    // In production, decode and verify JWT
    return {
      userId: parts[2] || '',
      email: 'user@example.com', // Would come from decoded token
    };
  }
}

export const authService = new AuthService();

