import { createClient } from "redis";
import { config } from "./env.config";

const {
  redis: { host, port, password },
  nodeEnv,
} = config;

export const redisClient = createClient({
  socket: { host, port },
  password,
  pingInterval: 10000,
});

redisClient.on("error", (error) => {
  console.error("[Redis] connection error", error);
});

redisClient.on("connect", () => {
  if (nodeEnv === "development") {
    console.log("[Redis] connected");
  }
});

export const connectRedis = async (): Promise<void> => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};
