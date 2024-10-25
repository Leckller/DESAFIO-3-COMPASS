import PresentationImage from '../../Assets/Home/presentation.jpeg';
import { StyledPresentation } from './Styles/Presentation';

function Presentation() {
  return (
    <StyledPresentation>
      <img src={ PresentationImage } alt="sala de estar" />
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut elit tellus, luctus nec ullamcorper mattis.
      </article>
    </StyledPresentation>
  );
}

export default Presentation;
