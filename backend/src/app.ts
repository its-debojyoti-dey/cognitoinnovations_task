import express from 'express';
import { config } from './config';
import { errorHandler } from './common/middleware/errorHandler.middleware';
import { notFound } from './common/middleware/notFound.middleware';
import { userRoutes } from './modules/user/user.route';
import { authRoutes } from './modules/auth/auth.route';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use(`/api/${config.apiVersion}/users`, userRoutes);
app.use(`/api/${config.apiVersion}/auth`, authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Express.js API with TypeScript',
    version: config.apiVersion,
    status: 'running'
  });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

export default app;

