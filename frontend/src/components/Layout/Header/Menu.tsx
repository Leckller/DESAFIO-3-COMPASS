import styled from 'styled-components';
import media from '../../../Utils/media';
import ITheme from '../../../Utils/Themes';

const StyledMenuBtn = styled.button`
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${(p) => (p.theme as ITheme).gold};
  color: white;
  position: relative;

  ${media.md`
    position: static;
    visibility: visible;
  `};
  
  .bar {
    position: absolute;
    width: 20px;
    height: 5px;
    background-color: #333;
    transform-origin: center;
    animation: ${(p) => (p.color ? 'cross 2s forwards' : 'cross 2s')};
  }

  .bar:nth-child(2) {
    transform: rotate(90deg);
    transform: translateY(32px);
    animation: cross-2 2s forwards;
  }
  
  @keyframes cross {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  @keyframes cross-2 {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

function Menu({ menu, setMenu }: { menu: boolean,
  setMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <StyledMenuBtn
      color={ menu as unknown as string }
      className="container"
      onClick={ () => setMenu((p) => !p) }
    >
      {menu ? 'X' : '='}
      <div className="bar" />
      <div className="bar" />
    </StyledMenuBtn>
  );
}

export default Menu;
