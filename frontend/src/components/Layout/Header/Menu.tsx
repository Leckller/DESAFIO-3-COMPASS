import { StyledMenuBtn } from './Styles/Menu';

function Menu({ menu, setMenu }: { menu: boolean,
  setMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <StyledMenuBtn
      selected={ menu }
      className="container"
      onClick={ () => setMenu((p) => !p) }
    >
      <div className="bar" />
      <div className="bar" />
    </StyledMenuBtn>
  );
}

export default Menu;
