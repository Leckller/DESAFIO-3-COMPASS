import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledColors } from './Styles/Colors';

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
