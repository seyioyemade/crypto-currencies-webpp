import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { crypto } = location.state || { crypto: {} };

  const backHome = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <BiArrowBack
          onClick={() => backHome()}
          className="arrow-back"
          data-testid="arrow-back-button"
        />
      </div>
      <div className="crypto-details">
        <h2>
          {crypto.name}
          {' '}
          (
          {crypto.symbol}
          )
        </h2>
        <ul>
          <li>
            market cap:
            {' '}
            {crypto.market_cap_usd}
          </li>
          <li>
            volume(24h):
            {' '}
            {crypto.volume24a}
          </li>
          <li>
            Price(Btc):
            {' '}
            {crypto.price_btc}
          </li>
          <li>
            Price(Usd):
            {' '}
            {crypto.price_usd}
          </li>
          <li>
            Volume(24h):
            {' '}
            {crypto.volume24}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Details;
