import styled from 'styled-components';
import ITheme from '../../../../Utils/Themes';

export const StyledHover = styled.div`
  display: flex;
  position: absolute;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  gap: 16px;
  backdrop-filter: blur(1px);

  button {

    background-color: white;
    color: ${(p) => (p.theme as ITheme).gold};
    border: none;
    padding: 16px;
    width: 70%;

  }

  section {
    display: flex;
    justify-content: center ;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: white;
      gap: 8px;
      border: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
