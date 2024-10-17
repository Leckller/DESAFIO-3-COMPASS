import styled from 'styled-components';

function Nav({ title }: { title: string }) {
  const StyledNav = styled.nav`
  
  
  `;

  const StyledTitle = styled.h2`
  
  
  `;

  return (
    <StyledNav>
      <StyledTitle>{title}</StyledTitle>
    </StyledNav>
  );
}

export default Nav;
