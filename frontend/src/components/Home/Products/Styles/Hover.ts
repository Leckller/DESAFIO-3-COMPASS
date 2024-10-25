import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledHover = styled.div`
  display: flex !important;
  position: absolute !important;
  visibility: hidden;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  width: 100% !important;
  height: 100% !important;
  gap: 16px !important;
  backdrop-filter: blur(1px) !important;

  button {

    background-color: white !important;
    color: ${(p) => (p.theme as ITheme).gold} !important;
    border: none !important;
    padding: 16px !important;
    width: 70% !important;

  }

  section {
    display: flex !important;
    justify-content: center  !important;
    gap: 8px !important;

    button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: transparent !important;
      color: white !important;
      gap: 8px !important;
      border: none !important;
      img {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
`;
