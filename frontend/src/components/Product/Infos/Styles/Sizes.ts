import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledSizes = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: ${(p) => (p.theme as ITheme).TextColor_sm}
  }

  article {
    display: flex;
    gap: 8px;
    button {
      border-radius: 8px;
      min-width: 32px;
      min-height: 32px;

      background-color: ${(p) => (p.theme as ITheme).Gold_sm}
    }
  }
`;
