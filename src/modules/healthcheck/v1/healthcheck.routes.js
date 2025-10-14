import { Router } from "express";
import { getHealthStatus } from "./healthcheck.controller.js";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check the health status of the server
 *     description: Returns the health status of the server including database connectivity.
 *     tags:
 *       - HealthCheck
 *     responses:
 *       200:
 *         description: Server is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                     serverTime:
 *                       type: string
 *                     database:
 *                       type: string
 *                 error:
 *                   type: string
 *                 timestamp:
 *                   type: string
 */
router.get("/", getHealthStatus);

export default router;
