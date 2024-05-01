import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Client } = pkg;
import { bids } from "./schema.js";

/**
 * A database client
 * For the sake of simplicity, we are using the default values for the connection
 *
 */
const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

await client.connect();
const db = drizzle(client);

/**
 * Get all bids from the database
 *
 * @returns {Promise<QueryResult>}
 */
export const getBids = async () => {
  return db.select(bids).execute();
};

/**
 * Get a bid by id
 *
 * @param {number} id
 * @returns {Promise<QueryResult>}
 */
export const getBid = async (id) => {
  return db.select(bids).where(bids.id.eq(id)).execute();
};

/**
 * Create a new bid
 *
 * @param {string} fullName
 * @param {number} amount
 * @returns {Promise<QueryResult>}
 */
export const createBid = async (fullName, amount, productId) => {
  return db.insert(bids).values({ fullName, amount, productId }).execute();
};
