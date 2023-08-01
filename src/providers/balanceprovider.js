import { createContext, useContext, useState } from "react";
import { balanceDB } from "../db/balanceDB";

const balanceContext = createContext();
const setBalanceContext = createContext();
const initial = balanceDB;

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(initial);

  return (
    <balanceContext.Provider value={balance}>
      <setBalanceContext.Provider value={setBalance}>
        {children}
      </setBalanceContext.Provider>
    </balanceContext.Provider>
  );
};

export default BalanceProvider;

export const useBalance = () => useContext(balanceContext);
export const useBalanceAction = () => {
  const setBalance = useContext(setBalanceContext);
  const balance = useBalance();

  const calcBalance = () =>
    balance.map((obj) => obj.amount).reduce((total, x) => total + x,0);

  const calcIncome = () =>
    balance
      .map((obj) => (obj.amount > 0 ? obj.amount : 0))
      .reduce((total=0, x) => total + x,0);

  const calcExpense = () =>
    balance
      .map((obj) => (obj.amount < 0 ? obj.amount : 0))
      .reduce((total=0, x) => total + x,0);

  const showHistory = (searchStr) =>
    searchStr === ""
      ? balance
      : balance.filter((obj) => obj.description.includes(searchStr));

  const addBalance = (newbal) => {
    setBalance([...balance, newbal]);
  };

  return { calcBalance, calcIncome, calcExpense, showHistory, addBalance };
};
