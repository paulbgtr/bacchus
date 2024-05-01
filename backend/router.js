import express from "express";
import {
  getAllBids,
  getBidById,
  createNewBid,
} from "./controllers/bids.controller.js";
import {
  getAllProducts,
  getProductById,
} from "./controllers/products.controller.js";

const router = express.Router();

/**
 * Default route
 *
 * Could be improved by adding a more descriptive message
 */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Bids routes
 */
router.get("/bids", getAllBids);
router.get("/bids/:id", getBidById);
router.post("/bids", createNewBid);

/**
 * Products routes
 */
router.get("/products", getAllProducts);
router.get("/products/:productId", getProductById);

export default router;
