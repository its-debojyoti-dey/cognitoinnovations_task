const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const config = {
  port: toNumber(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV || "development",
  apiVersion: process.env.API_VERSION || "v1",
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: toNumber(process.env.MYSQL_PORT, 3306),
    user: process.env.MYSQL_USER || "app_user",
    password: process.env.MYSQL_PASSWORD || "app_password",
    database: process.env.MYSQL_DATABASE || "app_db",
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: toNumber(process.env.REDIS_PORT, 6379),
    password: process.env.REDIS_PASSWORD,
  },
} as const;
