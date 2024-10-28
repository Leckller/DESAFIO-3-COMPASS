import { useEffect } from 'react';
import Presentation from '../components/Home/Presentation';
import Categories from '../components/Home/Category/Categories';
import Products from '../components/Home/Products/Products';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchProducts } from '../redux/Thunks/ProductsThunk';
import { StyledHomeMain } from './Styles/Home';

function Home() {
  const { products } = useAppSelector((s) => s.Product);
  const { sort } = useAppSelector((s) => s.Filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page: 0, show: 8, sort }));
  }, []);

  return (
    <StyledHomeMain>
      <Presentation />
      <h2>Browse The Range</h2>
      <Categories />
      <h2>
        Our Products
      </h2>
      <Products products={products} more="shop" />
    </StyledHomeMain>
  );
}

export default Home;
