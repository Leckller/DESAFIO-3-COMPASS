import styled from 'styled-components';
import media from '../../../../Utils/media';
import ITheme from '../../../../Utils/Themes';

export const StyledInfos = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px;
  gap: 16px;

  ${media.sm`
    justify-content: start;
  `}

  h3 {
    color: ${(p) => (p.theme as ITheme).TextColor_sm};
    font-weight: 700;
  }

  a {
    color: ${(p) => (p.theme as ITheme).TextColor};
    font-weight: 700;
    text-decoration: none;
  }

  article:nth-child(1) {
    p {
      color: ${(p) => (p.theme as ITheme).TextColor_sm};
    }
  }

  article {
    display: flex;
    flex-direction: column;
    min-width: 100px;
    max-width: 300px;
    gap: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    div {
      display: flex;
      gap: 8px;

      ${media.xs`
        flex-wrap: wrap;
      `}

      input {
        border: none;
        outline: none;
        width: 100%;
        border-bottom: solid 1px black;
        max-width: 250px;
      }

      button {
        border: none;
        background-color: transparent;
        border-bottom: solid 1px black;
      }
    }
  }
`;
