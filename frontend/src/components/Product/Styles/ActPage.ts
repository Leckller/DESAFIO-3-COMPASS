import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

export const StyledActPage = styled.section`
  display: flex;
  background-color: ${(p) => (p.theme as ITheme).Gold_sm};
  gap: 8px;
  padding: 32px;
  padding-left: 64px;
`;
