import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Coin from "./Coin"

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="coins-container">
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