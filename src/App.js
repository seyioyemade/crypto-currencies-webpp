import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Currencies from './components/Currencies/Home';
import Details from './components/Details';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Currencies />} />
      <Route path="details/:name" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default App;
