import styled from 'styled-components';
import { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Article from './Article';
import media from '../../../Utils/media';
import Menu from './Menu';
import { buttonsArticle, titlesNav } from '../../../Utils/Header';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${media.md`
      article, nav {
        visibility: hidden;
        position: absolute;
      }
    `}
`;

const StyledMenuSec = styled.section`
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.md`
    position: static;
    visibility: visible;
  `};
`;

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
