const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const config = {
  port: toNumber(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV || "development",
  apiVersion: process.env.API_VERSION || "v1",
} as const;
