import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {
  Cart, Home, Likes, NotFound,
  Product, Profile, Search, Shop,
} from './routes/Index';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/product/:item/:id" element={ <Product /> } />
        <Route path="/home/shop/:category/:page" element={ <Shop /> } />
        <Route path="shop/:category/:page" element={ <Shop /> } />
        <Route path="/home/shop" element={ <Shop /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="likes" element={ <Likes /> } />
        <Route path="profile" element={ <Profile /> } />
        <Route path="search" element={ <Search /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
