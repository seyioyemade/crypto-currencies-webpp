import { useState } from 'react';
import CurrenciesLogic from './CurrenciesLogic';

const Currencies = () => {
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
      <CurrenciesLogic search={search} />
    </>
  );
};

export default Currencies;
