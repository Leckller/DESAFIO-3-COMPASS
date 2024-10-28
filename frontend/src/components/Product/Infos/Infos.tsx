import { useAppSelector } from '../../../hooks/reduxHooks';
import Notes from './Notes';
import Colors from './Colors';
import Sizes from './Sizes';
import Stars from './Stars';
import TopText from './TopText';
import Form from './Form';
import { StyledDescription, StyledInfos } from './Styles/Infos';

function Infos() {
  const { product, loading } = useAppSelector((s) => s.Product);

  if (loading) return <section>Loading</section>;

  return (
    <StyledInfos>
      <TopText />
      <Stars />
      <StyledDescription>
        {product.description}
      </StyledDescription>
      <Sizes />
      <Colors />
      <Form />
      <Notes />
    </StyledInfos>
  );
}

export default Infos;
