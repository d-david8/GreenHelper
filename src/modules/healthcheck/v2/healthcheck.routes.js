import { Router } from "express";
import { getHealthStatus } from "./healthcheck.controller.js";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifică statusul serverului și conexiunea la DB
 *     tags:
 *       - HealthCheck
 *     responses:
 *       200:
 *         description: Serverul este activ
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
