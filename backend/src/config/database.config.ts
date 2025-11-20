import { Sequelize } from "sequelize";
import { config } from "./env.config";

const {
  mysql: { database, user, password, host, port },
  nodeEnv,
} = config;

export const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "mysql",
  logging: nodeEnv === "development" ? console.log : false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  retry: {
    match: [/Deadlock/i, /Connection\serror/i],
    max: 3,
  },
});
