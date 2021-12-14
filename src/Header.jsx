import { useEffect, useState } from "react";

import Trending from "./Trending";
import axios from "axios";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Header = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const trendingItems = trendingCoins.map((coin) => (
    <Trending key={coin.item.id} coin={coin.item} />
  ));

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrendingCoins(res.data.coins);
       
      }).then(console.log(trendingCoins));

  }, []);

  return (
    <header>
      <div className="page-wrapper">
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
            responsive={{ 1024: { items: 5 }, 480: {items: 4}, 0: {items: 2}}}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
