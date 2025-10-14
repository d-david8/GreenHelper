import HealthCheckService from "./healthcheck.service.js";
import { formatResponse } from "../../../core/utils/responseFormatter.js";

export const getHealthStatus = async (req, res, next) => {
  try {
    const status = await HealthCheckService.getHealthStatus();
    res.status(200).json(formatResponse(true, status));
  } catch (err) {
    next(err);
  }
};
