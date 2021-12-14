const Trending = ({coin}) => {
  return (
    <div className="trending">
      <img src={coin.small} alt='thumb' />
      <h4>{coin.symbol}</h4>
      <small style={{color: "grey"}}>{coin.name}</small>
      <span>#{coin.score+1}</span>
    </div>
  )
}

export default Trending;
