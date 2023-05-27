import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import CurrenciesLogic from './CurrenciesLogic';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <header>
        <div>
          <h1>Cryto Currencies Rankings</h1>
        </div>
        <form action="#">
          <input
            type="text"
            placeholder="Search by symbol"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <Provider store={store}>
        <CurrenciesLogic search={search} />
      </Provider>
    </>
  );
};

export default Home;
