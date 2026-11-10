
import { sql } from "drizzle-orm";
import { db } from "./db.js";

async function testConnection() {
  try {
    const result = await db.execute(sql`SELECT 1 AS connected`);

    console.log("Neon database connected successfully!");
    console.log(result);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

testConnection();
