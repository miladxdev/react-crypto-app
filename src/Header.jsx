import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Trending from "./Trending";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Header = ({ handleChange }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const trendingItems = trendingCoins.map((coin) => (
    <Trending key={coin.item.id} coin={coin.item} />
  ));

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrendingCoins(res.data.coins);
        console.log(res.data.coins);
      });
  }, []);

  return (
    <header>
      <Navigation />
      <div className="page-wrapper">
      <h1 className="header-title">CRYPTO APP</h1>

        <div className="trending-container">
          <p className="trending-title">Trending Coins</p>

          <Carousel
            mouseTracking
            items={trendingItems}
            autoPlay={true}
            animationDuration={1000}
            infinite={true}
            autoPlayInterval={4000}
            disableButtonsControls={true}
            disableDotsControls={true}
            responsive={{ 1024: { items: 6 }, 480: {items: 4}, 0: {items: 2}}}
          />
        </div>

        <div className="search-container">
          <input
            className="search-input"
            type="seach"
            onChange={(e) => handleChange(e)}
            placeholder="search..."
          />

          <div className="search-icon">
            <IoSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
