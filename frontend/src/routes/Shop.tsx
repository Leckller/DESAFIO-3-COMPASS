import styled from 'styled-components';
import Filter from '../components/Shop/Filter';
import Products from '../components/Home/Products/Products';
import Banner from '../components/Shop/Banner';
import { useAppSelector } from '../hooks/reduxHooks';
import Pages from '../components/Shop/Pages';

const StyledMain = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    section:nth-child(3) {
      margin-top: 64px;
    }
`;

function Shop() {
  const { products } = useAppSelector((s) => s.Product);

  return (
    <StyledMain>
      <Banner />
      <Filter />
      <Products products={ products } />
      <Pages />
    </StyledMain>

  );
}

export default Shop;
