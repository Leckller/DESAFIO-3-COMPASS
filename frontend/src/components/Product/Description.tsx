import { useAppSelector } from '../../hooks/reduxHooks';
import { StyledDescription } from './Styles/Description';

function Description() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledDescription>
      <article>
        <h2>Description</h2>
        <p>Additional Information</p>
      </article>
      <p>{product?.large_description}</p>
    </StyledDescription>
  );
}

export default Description;
