import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ITheme from '../../../Utils/Themes';

const StyledTexts = styled.section`
  h2 {
    font-weight: 300;
    font-size: 3rem;
  }

  h3 {
    color: ${(p) => (p.theme as ITheme).TextColor_md}
  }

`;

function TopText() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledTexts>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
    </StyledTexts>
  );
}

export default TopText;
