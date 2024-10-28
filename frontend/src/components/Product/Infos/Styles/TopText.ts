import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledTexts = styled.section<{ discount: boolean }>`
  h2 {
    font-weight: 300;
    font-size: 3rem;
  }

  article {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  h3 {
    color: ${(p) => (p.theme as ITheme).TextColor_md};
  }

  h4 {
    color: ${(p) => (p.theme as ITheme).TextColor_sm};
    text-decoration: ${(p) => (p.discount ? 'line-through' : '')};
  }

`;
