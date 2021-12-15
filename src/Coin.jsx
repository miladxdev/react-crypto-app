import { BsStar } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs'

const Coin = ({ coin }) => {
  const priceChangePositiveStyle = {
    background: "lightgreen",
  };

  const priceChangeNegativeStyle = {
    background: "crimson",
    color: "white"
  };

  return (
    <div className="coin">
      <div className="coin-rank">
        {coin.market_cap_rank}
        <div className="coin-favorite"><BsStar /></div>
      </div>

      <div className="coin-image-wrapper">
        <img src={coin.image} alt="coin" />
      </div>

      <div className="coin-name">
        <h4>{coin.name}</h4>
        <p className='coin-symbol'>{coin.symbol}</p>
      </div>

      <p className="coin-price">{coin.current_price.toFixed(2)} $</p>

      <p className="coin-change-24h"
        style={
          coin.price_change_percentage_24h > 0
            ? priceChangePositiveStyle
            : priceChangeNegativeStyle
        }
      >
        {Math.round(coin.price_change_percentage_24h)} %
      </p>

      <p className="coin-market-cap">{(coin.market_cap / 10e6).toFixed(2)} m$</p>
    </div>
  );
};

export default Coin;
