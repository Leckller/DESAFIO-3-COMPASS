import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledProduct = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;

  img {
    object-fit: cover;
    width: 280px;
    height: 300px;
    border: none;
  }

  article {
    background-color: ${(prop) => (prop.theme as ITheme).gray};
    color: ${(prop) => (prop.theme as ITheme).TextColor};
    padding: 16px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    max-width: 280px;
    width: 100%;
    text-align: start;

    p {
      color: ${(prop) => (prop.theme as ITheme).TextColor_md};
    }

    div {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;

      p {
        color: ${(prop) => (prop.theme as ITheme).TextColor};
        word-break: break-all;
      }

      p:nth-child(2) {
        color: ${(prop) => (prop.theme as ITheme).TextColor_sm};
        text-decoration: line-through;
      }
    }
  }
`;
