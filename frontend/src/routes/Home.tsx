import styled from 'styled-components';
import Presentation from '../components/Home/Presentation';
import Categories from '../components/Home/Category/Categories';
import Products from '../components/Home/Products/Products';

function Home() {
  const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 100%;
  `;

  return (
    <StyledMain>
      <Presentation />
      <Categories />
      <Products />
    </StyledMain>
  );
}

export default Home;
