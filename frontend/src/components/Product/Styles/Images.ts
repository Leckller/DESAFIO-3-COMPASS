import styled from 'styled-components';
import media from '../../../Utils/media';
import ITheme from '../../../Utils/Themes';

export const StyledImages = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 16px;
  padding: 16px;

  ${media.md`
    flex-direction: column;
    width: 100%;
  `}

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    ${media.md`
      flex-wrap: wrap;
      flex-direction: row;  
    `}
    
    button {
      border: none;
      background-color: transparent;
      border-radius: 8px;
      overflow: hidden;
      width: 76px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  img {
    background-color: ${(p) => (p.theme as ITheme).Gold_sm};
    max-width: 450px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    ${media.md`
      width: 100%;
    `}
  }

`;
