import app from "./app";
import { config, initializeInfrastructure } from "./config";

const PORT = config.port;

const startServer = async (): Promise<void> => {
  try {
    await initializeInfrastructure();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Environment: ${config.nodeEnv}`);
      console.log(`API Version: ${config.apiVersion}`);
    });
  } catch (error) {
    console.error("Failed to initialize infrastructure", error);
    process.exit(1);
  }
};

void startServer();
