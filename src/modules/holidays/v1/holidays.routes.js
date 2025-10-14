import { Router } from "express";
import { getHolidays } from "./holidays.controller.js";

const router = Router();

/**
 * @swagger
 * /holidays:
 *   get:
 *     summary: Get Romanian legal holidays
 *     description: Returns a list of public holidays in Romania for a specific year. Defaults to the current year if no year is provided.
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *           example: 2025
 *         required: false
 *         description: The year for which to fetch the holidays (defaults to the current year)
 *     responses:
 *       200:
 *         description: Successful response with list of holidays
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the holiday
 *                         example: Ziua Națională a României
 *                       date:
 *                         type: string
 *                         format: date
 *                         description: The date of the holiday (YYYY-MM-DD)
 *                         example: 2025-12-01
 *                       dayOfWeek:
 *                         type: string
 *                         description: The day of the week (in Romanian)
 *                         example: Luni
 *       400:
 *         description: Invalid input (e.g., year out of range)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Invalid year format
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Unexpected server error
 */
router.get("/", getHolidays);

export default router;
