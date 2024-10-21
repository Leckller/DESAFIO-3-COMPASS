import styled from 'styled-components';
import Infos from './Infos';
import Rights from './Rights';
import Quality from './Qualities';

function Footer() {
  const StyledFooter = styled.footer`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  `;

  return (
    <StyledFooter>
      <Quality />
      <Infos />
      <Rights />
    </StyledFooter>
  );
}

export default Footer;
