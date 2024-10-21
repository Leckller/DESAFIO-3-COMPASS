import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Product, Shop } from './routes/Index';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/product/:item/:id" element={ <Product /> } />
        <Route path="/home/shop/:category" element={ <Shop /> } />
        <Route path="/home/shop" element={ <Shop /> } />
        <Route path="shop/:category" element={ <Shop /> } />
        <Route path="shop" element={ <Shop /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
