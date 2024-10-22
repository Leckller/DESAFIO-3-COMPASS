import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxHooks';
import Notes from './Notes';
import Colors from './Colors';
import Sizes from './Sizes';
import Stars from './Stars';
import TopText from './TopText';
import Form from './Form';
import media from '../../../Utils/media';

const StyledInfos = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 45%;
  flex-direction: column;
  gap: 16px;

  ${media.md`
    width: 100%;
    align-items: center;
  `}

  button {
    border: none;
    background-color: transparent;
    padding: 8px;
  }
`;

function Infos() {
  const { product, loading } = useAppSelector((s) => s.Product);

  if (loading) return <section>Loading</section>;

  return (
    <StyledInfos>
      <TopText />
      <Stars />
      <p>{product.description}</p>
      <Sizes />
      <Colors />
      <Form />
      <Notes />
    </StyledInfos>
  );
}

export default Infos;
