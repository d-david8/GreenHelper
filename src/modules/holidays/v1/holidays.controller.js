import HolidaysService from "./holidays.service.js";
import { formatResponse } from "../../../core/utils/responseFormatter.js";

export const getHolidays = (req, res, next) => {
  try {
    const year = req.query.year
      ? parseInt(req.query.year)
      : new Date().getFullYear();
    const holidays = HolidaysService.getHolidays(year);
    res.status(200).json(formatResponse(true, holidays));
  } catch (err) {
    next(err);
  }
};
