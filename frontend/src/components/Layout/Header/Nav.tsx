import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Nav({ titles }: { titles: string[] }) {
  const navigate = useNavigate();

  const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    align-items: center;
  
  `;

  const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `;

  const StyledText = styled.h2``;

  return (
    <StyledNav>

      {titles.map((text) => (
        <StyledButton
          key={ text }
          onClick={ () => navigate(text) }
        >
          <StyledText>
            {text}
          </StyledText>
        </StyledButton>
      ))}

    </StyledNav>
  );
}

export default Nav;
