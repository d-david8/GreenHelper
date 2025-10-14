import { Pool } from "pg";
import { DB_CONFIG } from "../../config/db.config.js";

const pool = new Pool(DB_CONFIG);

class DatabaseService {
  static async testConnection() {
    try {
      const client = await pool.connect();
      await client.query("SELECT NOW()");
      client.release();
      return true;
    } catch (err) {
      console.error("❌ Database connection failed:", err.message);
      return false;
    }
  }
}

export default DatabaseService;
