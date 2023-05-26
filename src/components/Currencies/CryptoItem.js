import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CryptoItem = ({ crypto }) => {
  const navigate = useNavigate();
  const details = (crypto) => {
    navigate(`/details/${crypto.name}`, { state: { crypto } });
  };

  return (
    <button type="button" onClick={() => details(crypto)}>
      <BsArrowRightCircle className="arrow-right" />
      <div>
        <h3 className="crypto-name">{crypto.symbol}</h3>
        <h4 className="crypto-rank">
          Rank:
          {crypto.rank}
        </h4>
      </div>
    </button>
  );
};

CryptoItem.propTypes = {
  crypto: PropTypes.isRequired,
};

export default CryptoItem;
