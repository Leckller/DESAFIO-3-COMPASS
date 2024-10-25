import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledSizes } from './Styles/Sizes';

function Sizes() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledSizes>
      {product?.sizes?.length > 0 && (
        <>
          <p>Size</p>
          <article>
            {product.sizes?.map((size) => (
              <button key={ size.id }>
                {size.size}
              </button>
            ))}
          </article>
        </>
      )}
    </StyledSizes>
  );
}

export default Sizes;
