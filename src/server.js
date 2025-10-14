import app from "./app.js";
import { SERVER_PORT } from "./config/server.config.js";

const startServer = () => {
  app.listen(SERVER_PORT, () => {
    console.log(`🚀 GreenHelper running on port ${SERVER_PORT}`);
  });
};

startServer();
