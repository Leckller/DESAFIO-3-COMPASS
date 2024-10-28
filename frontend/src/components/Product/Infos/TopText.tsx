import { useAppSelector } from '../../../hooks/reduxHooks';
import { discount } from '../../../Utils/discount';
import { StyledTexts } from './Styles/TopText';

function TopText() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledTexts discount={ product?.discount_percent > 0 }>
      <h2>{product.name}</h2>
      <article>
        {(product.discount_percent > 0) && (
          <h3>
            {discount(product?.price, product?.discount_percent)}
          </h3>
        )}
        <h4>
          {product?.price}
        </h4>
      </article>
    </StyledTexts>
  );
}

export default TopText;
