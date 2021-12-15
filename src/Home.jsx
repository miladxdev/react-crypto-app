import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Coin from "./Coin"
import CoinHeader from './CoinHeader'

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
        console.log(coins);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="coins-container">
         <CoinHeader />
        {
          coins.map((coin) => (
            <Link to={`/coins/${coin.id}`} key={coin.id}>
              <Coin coin={coin} />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home