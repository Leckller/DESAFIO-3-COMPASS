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

export const StyledWebLinks = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      width: 60px;
    }
`;
