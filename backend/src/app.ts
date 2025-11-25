import express, { Application } from "express";
import cors from "cors";
import { config } from "./config";
import { errorHandler } from "./common/middleware/errorHandler.middleware";
import { notFound } from "./common/middleware/notFound.middleware";
import { productRoutes } from "./modules/product/product.route";
import { newsletterRoutes } from "./modules/newsletter/newsletter.route";
import { orderRoutes } from "./modules/order/order.route";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Routes
app.use(`/api/${config.apiVersion}/products`, productRoutes);
app.use(`/api/${config.apiVersion}/newsletter`, newsletterRoutes);
app.use(`/api/${config.apiVersion}/orders`, orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Express.js API with TypeScript",
    version: config.apiVersion,
    status: "running",
  });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

export default app;
