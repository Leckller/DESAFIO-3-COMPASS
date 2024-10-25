import styled from 'styled-components';
import media from '../../../../Utils/media';

export const StyledCategories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      gap: 16px;
      max-height: 600px;
  }

  ${media.md`
      section {
          height: 520px;
          flex-wrap: wrap;
          overflow: auto;
          scroll-snap-type: x mandatory;
          flex-direction: column;
          padding: 0 16px 0 16px;
      }    
  `}

`;
