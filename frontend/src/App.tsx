import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Product, Shop } from './routes/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/shop" element={ <Shop /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
