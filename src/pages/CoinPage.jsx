import { useParams } from 'react-router-dom'

const CoinPage  = () => {
  const { id } = useParams();

  return (
    <div className="page-wrapper">
      <h1>this is {id} page</h1>
    </div>
  );
}

export default CoinPage