import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledTexts } from './Styles/TopText';

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
