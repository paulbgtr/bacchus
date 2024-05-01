import { useEffect, useState } from "react";

/**
 * This component is a section of a root component displaying a list of all the auctions available for bidding.
 *
 * @returns A list of all the auctions available for bidding react component
 */
export const AuctionList = () => {
  return (
    <>
      <h2 className="font-bold text-xl">
        A list of all the auctions available for bidding
      </h2>

      <AuctionItems />
    </>
  );
};

/**
 * A component to display a list of auction items.
 * It fetches them from the backend API. While fetching, it shows a loading spinner provided by daisyui.
 *
 *  @returns A list of auction items react component
 */
const AuctionItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsApi = "http://localhost:3001/products";

      try {
        const response = await fetch(productsApi);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const productsData = await response.json();

        setProducts(productsData);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <span className="loading loading-ball loading-md"></span>;
  }

  return (
    <div className="grid gap-3 grid-cols-3">
      {products.map((product) => (
        <AuctionItem key={product.productId} {...product} />
      ))}
    </div>
  );
};

/**
 * A component to display an auction item
 *
 * @param {number} productId
 * @param {string} productName
 * @param {string} productCategory
 * @param {string} biddingEndDate
 *
 * @returns An auction item react component
 */
export const AuctionItem = ({
  productId,
  productName,
  productCategory,
  biddingEndDate,
}) => {
  return (
    <a className="hover:opacity-80 transition" href={`products/${productId}`}>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <span>{productCategory}</span>
          <span>{biddingEndDate}</span>
        </div>
      </div>
    </a>
  );
};
