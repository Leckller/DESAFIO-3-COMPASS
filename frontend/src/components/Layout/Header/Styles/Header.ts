import styled from 'styled-components';
import media from '../../../../Utils/media';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${media.md`
    article, nav {
      visibility: hidden;
      position: absolute;
    }
  `}
`;

export const StyledMenuSec = styled.header`
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.md`
    position: static;
    visibility: visible;
  `};
`;
