import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledProduct = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.2rem;
  height: 100%;
  border: none;
  background-color: transparent;

  &:hover {

    div {
      visibility: visible;
    }

  }

  img {
    object-fit: cover;
    width: 280px;
    height: 300px;
    border: none;
  }
`;

export const StyledProductArticle = styled.article`
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
    white-space: nowrap;
    width: 100%;
    overflow: hidden; /* "overflow" value must be different from "visible" */

    text-overflow: ellipsis;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    
    p {
      color: ${(prop) => (prop.theme as ITheme).TextColor};
    }

    p:nth-child(2) {
      color: ${(prop) => (prop.theme as ITheme).TextColor_sm};
      text-decoration: line-through;
    }
  }
`