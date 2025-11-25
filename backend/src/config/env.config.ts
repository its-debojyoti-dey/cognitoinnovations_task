const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const config = {
  port: toNumber(process.env.PORT, 3001),
  nodeEnv: process.env.NODE_ENV || "development",
  apiVersion: process.env.API_VERSION || "v1",
  email: {
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: toNumber(process.env.EMAIL_PORT, 587),
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER || "",
  },
} as const;
