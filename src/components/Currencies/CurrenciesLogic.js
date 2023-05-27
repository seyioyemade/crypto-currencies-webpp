import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cryptoData } from '../../redux/currencies/currenciesSlice';
import CryptoItem from './CryptoItem';

const CurrenciesLogic = ({ search }) => {
  const { loading, cryptos, error } = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      {cryptos
        .filter((crypto) => {
          const { symbol } = crypto;
          return search.toLowerCase() === ''
            ? crypto
            : symbol.toLowerCase().includes(search);
        }).map((crypto) => (
          <CryptoItem key={crypto.id} crypto={crypto} />
        ))}
    </main>
  );
};

CurrenciesLogic.propTypes = {
  search: PropTypes.string.isRequired,
};

export default CurrenciesLogic;
