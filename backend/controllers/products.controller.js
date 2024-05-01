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

/**
 * Get a product by id from the external API
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @returns {Promise<void>}
 */
export const getProductById = (req, res) => {
  const productId = req.params.productId;

  axios
    .get(`http://uptime-auction-api.azurewebsites.net/api/Auction`)
    .then((response) => {
      const allProducts = response.data;

      const product = allProducts.find((product) => {
        return product.productId === productId;
      });

      if (!product) {
        res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send(product);
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
