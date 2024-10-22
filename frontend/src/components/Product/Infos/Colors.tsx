import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ITheme from '../../../Utils/Themes';

const StyledColors = styled.article`
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
      border-radius: 99999px;
      min-width: 32px;
      min-height: 32px;

      background-color: ${(p) => (p.theme as ITheme).Gold_sm}
    }
  }
`;

function Colors() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledColors>
      {product?.colors?.length > 0 && (
        <>
          <p>
            Color
          </p>
          <article>
            {product.colors?.map((color) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                style={ { backgroundColor: color.color } }
                key={ color.id }
              />
            ))}
          </article>
        </>
      )}
    </StyledColors>
  );
}

export default Colors;
