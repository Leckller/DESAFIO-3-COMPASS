import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledNotes = styled.section`
  color: ${(p) => (p.theme as ITheme).TextColor_sm};
  label {
    display: flex;
    gap: 16px;

    p:nth-child(1) {
      width: 60px;
    }
  }

`;
