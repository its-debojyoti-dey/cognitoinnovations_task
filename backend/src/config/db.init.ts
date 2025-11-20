import { sequelize } from "./database.config";
import { connectRedis } from "./redis.config";

export const initializeInfrastructure = async (): Promise<void> => {
  await sequelize.authenticate();
  await sequelize.sync();
  await connectRedis();
};
