import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import Article from './Article';
import { Cart, Heart, Lupa, User } from '../../../Assets/Header/index';

function Header() {
  const StyledHeader = styled.header`
      display: flex;
      //Provisorio
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;

  `;

  const buttons = [
    { img: User, route: 'user' },
    { img: Lupa, route: 'search' },
    { img: Heart, route: 'likes' },
    { img: Cart, route: 'cart' },
  ];

  return (
    <StyledHeader>

      <Logo />
      <Nav titles={ ['Home', 'Shop', 'About', 'Contact'] } />
      <Article buttons={ buttons } />

    </StyledHeader>
  );
}

export default Header;
