import { Header } from "../components/Header";
import { AuctionList } from "../components/AuctionList";

const Root = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <AuctionList />
    </div>
  );
};

export default Root;
