import "./App.css";
import ExTr from "./components/extr";
import Header from "./components/header";
import History from "./components/history";
import BalanceProvider from "./providers/balanceprovider";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content container">
        <BalanceProvider>
          <ExTr />
          <History />
        </BalanceProvider>
      </div>
    </div>
  );
}

export default App;
