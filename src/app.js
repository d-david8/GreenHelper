import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.config.js";

// Routes
// HealthCheck
import healthcheckV1Routes from "./modules/healthcheck/v1/healthcheck.routes.js";
import healthcheckV2Routes from "./modules/healthcheck/v2/healthcheck.routes.js";

// Holidays
import holidaysRoutes from "./modules/holidays/v1/holidays.routes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Documentație Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// HealthCheck
app.use("/api/v1/health", healthcheckV1Routes);
app.use("/api/v2/health", healthcheckV2Routes);

// Holidays
app.use("/api/v1/holidays", holidaysRoutes);

export default app;
