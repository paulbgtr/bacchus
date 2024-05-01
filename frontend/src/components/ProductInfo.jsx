import { useState } from "react";

/**
 * Product information component.
 * It is needed for decomposing the product information and all the complex logic into a separate component.
 * It is to display information about a product and a form for placing a bid on the Product route.
 *
 * @param {number} productId
 * @param {string} productName
 * @param {string} productDescription
 * @param {string} biddingEndDate
 * @returns A product information component
 */
export const ProductInfo = ({
  productId,
  productName,
  productDescription,
  biddingEndDate,
}) => {
  return (
    <div className="space-y-3">
      <header>
        <h2 className="font-bold text-3xl">{productName}</h2>
        <p>{productDescription}</p>
        <span>{biddingEndDate}</span>
      </header>
      <PlaceBid productId={productId} />
    </div>
  );
};

/**
 * @param {number} productId
 * @returns A form for placing a bid
 */
const PlaceBid = ({ productId }) => {
  const [fullName, setFullName] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchApi = async () => {
    const api = "http://localhost:3001/bids";

    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        amount: bidAmount,
        productId,
      }),
    });

    if (!res.ok) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSuccess(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetchApi();
  };

  if (isSuccess) {
    return (
      <div>
        <h3 className="font-bold text-xl mb-3">Placing a bid</h3>
        <p className="text-success">
          Your bid of {bidAmount} was placed successfully!
        </p>
        <a className="mt-3 btn btn-primary" href="/">
          See more products
        </a>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-bold text-xl mb-3">Placing a bid</h3>
      <form onSubmit={onSubmit} className="space-y-3 max-w-xl">
        <input
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your Full Name"
          className="input input-bordered w-full"
        />
        <input
          required
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Bid amount"
          className="input input-bordered w-full"
        />
        <button className="max-w-xs btn">Submit</button>
        {isError && <p className="text-error">Failed to place bid</p>}
      </form>
    </div>
  );
};
