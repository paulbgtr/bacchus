import axios from "axios";

/**
 * Get all products from the external APi
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
export const getAllProducts = (req, res) => {
  axios
    .get("http://uptime-auction-api.azurewebsites.net/api/Auction")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
