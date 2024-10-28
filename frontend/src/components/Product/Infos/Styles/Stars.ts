import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledStars = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  p {
    color: ${(p) => (p.theme as ITheme).TextColor_md};
    padding-left: 8px;
    border-left: 1px solid ${(p) => (p.theme as ITheme).TextColor_md};
  }
`;
