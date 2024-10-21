import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import Article from './Article';
import { Cart, Heart, Lupa, User } from '../../../Assets/Header/index';

const StyledHeader = styled.header`
    display: flex;
    //Provisorio
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;

function Header() {
  const buttons = [
    { img: User, route: 'user' },
    { img: Lupa, route: 'search' },
    { img: Heart, route: 'likes' },
    { img: Cart, route: 'cart' },
  ];

  return (
    <StyledHeader>

      <Logo />
      <Nav
        titles={ [
          { title: 'Home', for: '' },
          { title: 'Shop', for: 'shop' },
          { title: 'About', for: 'about' },
          { title: 'Contact', for: 'contact' },
        ] }
      />
      <Article buttons={ buttons } />

    </StyledHeader>
  );
}

export default Header;
