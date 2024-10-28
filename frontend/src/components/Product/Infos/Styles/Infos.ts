import styled from 'styled-components';
import media from '../../../../Utils/media';

export const StyledInfos = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 45%;
  padding: 16px;
  flex-direction: column;
  gap: 16px;

  ${media.md`
    width: 100%;
    align-items: center;
  `}
  
  button {
    border: none;
    background-color: transparent;
    padding: 8px;
  }
`;

export const StyledDescription = styled.p`
  max-width: 424px;
`;
