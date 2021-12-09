const Coin = ({ coin }) => {
  const priceChangePositiveStyle = {
    color: "lightgreen",
    marginLeft: ".5rem"
  };

  const priceChangeNegativeStyle = {
    color: "crimson",
    marginLeft: ".5rem"
  };

  return (
    <div className="coin">
      <div className="coin-image-wrapper">
        <span className="coin-rank">{coin.market_cap_rank}</span>
        <img src={coin.image} alt="coin" />
        <span className="coin-symbol">{coin.symbol}</span>
      </div>

      <h4>{coin.name}</h4>

      <p>
        {coin.current_price.toFixed(2)}$
        <small
          style={
            coin.price_change_percentage_24h > 0
              ? priceChangePositiveStyle
              : priceChangeNegativeStyle
          }
        >
          {Math.round(coin.price_change_percentage_24h)}%
        </small>
      </p>

      <p>{coin.market_cap}$</p>
    </div>
  );
};

export default Coin;
