import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

export const StyledButtonPages = styled.button`
  background-color: ${(p) => (p.color === '1'
    ? (p.theme as ITheme).gold : (p.theme as ITheme).Gold_md)};
  border: none;
  padding: 16px;
  border-radius: 8px;
  min-width: 50px;
  min-height: 50px;
`;
