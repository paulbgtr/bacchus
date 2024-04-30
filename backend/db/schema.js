import {
  integer,
  varchar,
  timestamp,
  pgTable,
  serial,
  decimal,
} from "drizzle-orm/pg-core";

export const bids = pgTable("bids", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 256 }).notNull(),
  bidDate: timestamp("bid_date").notNull().defaultNow(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  productId: integer("product_id").notNull(),
});
