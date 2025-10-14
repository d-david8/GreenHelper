import DatabaseService from "../../../core/services/DatabaseService.js";

class HealthCheckService {
  static async getHealthStatus() {
    const dbConnected = await DatabaseService.testConnection();
    return {
      status: "ok",
      serverTime: new Date().toISOString(),
      database: dbConnected ? "connected" : "disconnected",
    };
  }
}

export default HealthCheckService;
