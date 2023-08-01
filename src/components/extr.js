import { useState } from "react";
import { useBalanceAction } from "../providers/balanceprovider";

const ExTr = () => {
  const { calcBalance, calcIncome, calcExpense, addBalance } =
    useBalanceAction();
  const [amountInput, setAmountInput] = useState(null);
  const [descreptionInput, setdescreptionInput] = useState("");
  const [incexpInput, setincexpInput] = useState("");
  const [addMode, setAddMode] = useState(false);

  const addTransactionHandler = () => {
    addBalance({
      type: incexpInput,
      amount:
        incexpInput === "income" ? Number(amountInput) : Number(-amountInput),
      description: descreptionInput,
    });
    setAmountInput("");
    setdescreptionInput("");
  };
  return (
    <section className="extrSection">
      <div className="extrHeader">
        <div className="extrHeader__left">
          <p>Balance : $ </p>
          <span>{calcBalance().toLocaleString()}</span>
        </div>
        <button
          onClick={() => {
            setAddMode((pre) => !pre);
            setAmountInput("");
            setdescreptionInput("");
          }}
        >
          {addMode ? "Cancel" : "ADD"}
        </button>
      </div>
      <div className={`extrAdd ${!addMode && "extrAdd--hidden"}`}>
        <input
          value={amountInput}
          onChange={({ target }) => {
            setAmountInput(target.value);
          }}
          type="number"
          placeholder="Amount"
          name="currency"
        />
        <input
          value={descreptionInput}
          onChange={({ target }) => setdescreptionInput(target.value)}
          type="text"
          placeholder="Description"
        />
        <div className="extrAdd_radio">
          <div>
            <input
              onClick={({ target }) => setincexpInput(target.value)}
              type="radio"
              name="incexp"
              id="income"
              value="income"
            />
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input
              onClick={({ target }) => setincexpInput(target.value)}
              type="radio"
              name="incexp"
              id="expense"
              value="expense"
            />
            <label htmlFor="expense">Expense</label>
          </div>
        </div>
        <button onClick={addTransactionHandler}>Add Transaction</button>
      </div>
      <div className="extrShow">
        <div className="extrShow_expense">
          <p>Expense</p>
          <p>${Math.abs(calcExpense()).toLocaleString()}</p>
        </div>
        <div className="extrShow_income">
          <p>Income</p>
          <p>${calcIncome().toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default ExTr;
