import { getBids, createBid, getBid } from "../db/db.js";

/**
 * Get all bids by utilizing the getBids function from db.js
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
export const getAllBids = async (req, res) => {
  try {
    const bids = await getBids();
    res.status(200).json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Get a bid by id by utilizing the getBid function from db.js
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
export const getBidById = async (req, res) => {
  try {
    const id = req.params.id;
    const bid = await getBid(id);
    res.status(200).json(bid);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Create a new bid by utilizing the createBid function from db.js
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
export const createNewBid = async (req, res) => {
  try {
    const { fullName, amount, productId } = req.body;
    await createBid(fullName, amount, productId);
    res.status(201).json({ message: "Bid created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
