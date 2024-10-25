import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';
import media from '../../../../Utils/media';

export const StyledQualities = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(p) => (p.theme as ITheme).Gold_sm};
  flex-wrap: wrap;
  gap: 16px;
  padding: 64px;

  ${media.sm`
    justify-content: space-between;
  `}
  article {
    display: flex;
    gap: 8px;
    
    img {
      width: 60px;
      height: 60px;
    }
      
    article {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
          color: ${(p) => (p.theme as ITheme).TextColor}
        }
        h4 {
          color: ${(p) => (p.theme as ITheme).TextColor_md}
        }
      }
  }
`;
