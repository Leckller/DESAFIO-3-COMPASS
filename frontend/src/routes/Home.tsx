import styled from 'styled-components';
import Presentation from '../components/Home/Presentation';
import Category from '../components/Home/Category';

function Home() {
  const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
  
  `;

  return (
    <StyledMain>
      <Presentation />
      <Category />
    </StyledMain>
  );
}

export default Home;
