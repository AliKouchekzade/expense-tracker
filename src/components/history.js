import { useState } from "react";
import { useBalanceAction } from "../providers/balanceprovider";
import HistoryElement from "./historyElement";

const History = () => {
  const [searchInput, setSearchInput] = useState("");

  const { showHistory } = useBalanceAction();

  return (
    <section className="historySection">
      <h1>Transactions</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={({ target }) => setSearchInput(target.value)}
      />
      <div className="historySection__history">
        {showHistory(searchInput).map((balanceElement, index) => (
          <HistoryElement balanceElement={balanceElement} key={index} />
        ))}
      </div>
    </section>
  );
};

export default History;
