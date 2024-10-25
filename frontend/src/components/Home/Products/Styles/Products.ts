import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';
import media from '../../../../Utils/media';

export const StyledProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;

  & > button {
      display: flex;
      color: ${(prop) => (prop.theme as ITheme).gold};
      background-color: transparent;
      border: solid 1px ${(prop) => (prop.theme as ITheme).gold};
      padding: 8px 32px;
  }

  section {
      display: grid;
      column-gap: 16px;
      row-gap: 16px;
      grid-template-columns: auto auto auto auto;
  }

  ${media.lg`
    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `}
`;
