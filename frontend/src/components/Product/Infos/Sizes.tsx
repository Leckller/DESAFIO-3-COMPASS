import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ITheme from '../../../Utils/Themes';

const StyledSizes = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: ${(p) => (p.theme as ITheme).TextColor_sm}
  }

  article {
    display: flex;
    gap: 8px;
    button {
      border-radius: 8px;
      min-width: 32px;
      min-height: 32px;

      background-color: ${(p) => (p.theme as ITheme).Gold_sm}
    }
  }
`;

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
