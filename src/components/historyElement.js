const HistoryElement = ({ balanceElement }) => {
  return (
    <div className={`historyElement ${balanceElement.type === "income" ? "incomeHistory" : "expenseHistory" }`}>
      <p>{balanceElement.description}</p>
      <p>${Math.abs(balanceElement.amount).toLocaleString()} </p>
    </div>
  );
};

export default HistoryElement;
