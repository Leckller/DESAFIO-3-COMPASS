import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

function Nav({ titles }: { titles: { title: string, for: string }[] }) {
  const navigate = useNavigate();

  return (
    <StyledNav>

      {titles.map((t) => (
        <StyledButton
          key={ t.title }
          onClick={ () => navigate(t.for) }
        >
          <StyledText>
            {t.title}
          </StyledText>
        </StyledButton>
      ))}

    </StyledNav>
  );
}

export default Nav;
