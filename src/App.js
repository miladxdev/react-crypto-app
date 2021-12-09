import "./styles.css";
import Coin from "./Coin";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [searchedCoins, setSearchedCoins] = useState([]);

  const handleChange = (e) => {
    let searched = coins.filter((coin) => coin.id.includes(e.target.value));

    if (e.target.value) {
      setSearchedCoins(searched);
    } else {
      setSearchedCoins(coins);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setSearchedCoins(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Header handleChange={(e) => handleChange(e)} />

      <div className="page-wrapper">
        <div className="coins-container">
          {searchedCoins.length ? (
            searchedCoins.map((coin) => <Coin key={coin.id} coin={coin} />)
          ) : (
            <h4 className="no-result">
              No result! pleader check your input...
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
