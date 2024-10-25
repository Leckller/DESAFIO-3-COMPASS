import { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Article from './Article';
import Menu from './Menu';
import { buttonsArticle, titlesNav } from '../../../Utils/Header';
import { StyledHeader, StyledMenuSec } from './Styles/Header';

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <StyledHeader>

        <Logo />
        <Nav titles={ titlesNav } />
        <Article buttons={ buttonsArticle } />

        <Menu setMenu={ setMenu } menu={ menu } />

      </StyledHeader>
      {
        menu && (
          <StyledMenuSec>
            <Nav titles={ titlesNav } />
            <Article buttons={ buttonsArticle } />
          </StyledMenuSec>
        )
      }
    </>
  );
}

export default Header;
