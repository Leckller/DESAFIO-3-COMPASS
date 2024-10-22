import styled from 'styled-components';
import { useAppSelector } from '../../hooks/reduxHooks';
import ITheme from '../../Utils/Themes';

const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 64px;

  article {
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
    p {
      color: ${(p) => (p.theme as ITheme).TextColor_md};
    }
  }

  p {
    color: ${(p) => (p.theme as ITheme).TextColor_sm};
  }
`;

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
