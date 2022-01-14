import { useEffect, useState } from "react";

import Trending from "./Trending";
import axios from "axios";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoDocumentAttach } from "react-icons/io5";
// custom hook
// import useFetch from './hooks/useFetch'

const Header = () => {
  // const {data, isPending} = useFetch('ttps://api.coingecko.com/api/v3/search/trending');

  const [trendingCoins, setTrendingCoins] = useState([]);

  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setTrendingCoins(res.data.coins);
        console.log('res: ', res.data.coins);

         let items = res.data.coins.map((coin) => (
          <Trending key={coin.item.id} coin={coin.item} />
        ));

        setTrendingItems(items);
        console.log('items:', items);
      });
  }, []);

  return (
    <header>
      <div className="page-wrapper">
        <div className="trending-container">
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
