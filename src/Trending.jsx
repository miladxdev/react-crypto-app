const Trending = ({coin}) => {
  return (
    <div className="trending">
      <h4>{coin.symbol}</h4>
      <small style={{color: "grey"}}>{coin.name}</small>
      <img src={coin.small} alt='thumb' />
      <span>#{coin.score+1}</span>
    </div>
  )
}

export default Trending;
