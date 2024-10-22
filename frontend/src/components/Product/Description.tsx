import styled from 'styled-components';
import { useAppSelector } from '../../hooks/reduxHooks';

const StyledDescription = styled.section`


`;

function Description() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledDescription>
      a
    </StyledDescription>
  );
}

export default Description;
