import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledForm = styled.form`
  border-bottom: 1px solid ${(p) => (p.theme as ITheme).TextColor_sm};
  justify-content: center;
  padding-bottom: 32px;
  flex-wrap: wrap;
  display: flex;
  gap: 16px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.theme as ITheme).TextColor_sm};

    button {
      border: none;
    }
  }

  button {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.theme as ITheme).TextColor};
    font-size: 1.2rem;
  }
`;
