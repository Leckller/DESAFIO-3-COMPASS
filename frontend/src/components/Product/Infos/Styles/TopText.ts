import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledTexts = styled.section`
  h2 {
    font-weight: 300;
    font-size: 3rem;
  }

  h3 {
    color: ${(p) => (p.theme as ITheme).TextColor_md}
  }

`;
