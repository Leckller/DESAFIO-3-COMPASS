import styled from 'styled-components';
import { useEffect } from 'react';
import Presentation from '../components/Home/Presentation';
import Categories from '../components/Home/Category/Categories';
import Products from '../components/Home/Products/Products';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchProducts } from '../redux/Thunks/ProductsThunk';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100%;
`;

function Home() {
  const { products } = useAppSelector((s) => s.Product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(0));
  }, []);

  return (
    <StyledMain>
      <Presentation />
      <h2>Browse The Range</h2>
      <Categories />
      <h2>
        Our Products
      </h2>
      <Products products={ products } />
      <button>
        Show More
      </button>
    </StyledMain>
  );
}

export default Home;
