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
      <div className="coin-image-wrapper">
        <span className="coin-rank">{coin.market_cap_rank}</span>
        <img src={coin.image} alt="coin" />
        <span className="coin-symbol">{coin.symbol}</span>
      </div>

      <h4>{coin.name}</h4>

      <p>{coin.current_price.toFixed(2)}$</p>

      <div>
        <p className="coin-change-24h"
          style={
            coin.price_change_percentage_24h > 0
              ? priceChangePositiveStyle
              : priceChangeNegativeStyle
          }
        >
          {Math.round(coin.price_change_percentage_24h)} %
        </p>
      </div>

      <p>{(coin.market_cap / 10e6).toFixed(2)} m$</p>
    </div>
  );
};

export default Coin;
