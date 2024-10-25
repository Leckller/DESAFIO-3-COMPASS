import Infos from './Infos';
import Rights from './Rights';
import Quality from './Qualities';
import { StyledFooter } from './Styles/Footer';

function Footer() {
  return (
    <StyledFooter>
      <Quality />
      <Infos />
      <Rights />
    </StyledFooter>
  );
}

export default Footer;
