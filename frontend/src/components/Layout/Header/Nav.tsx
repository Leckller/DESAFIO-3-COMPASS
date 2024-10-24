import { useNavigate } from 'react-router-dom';
import { StyledButtonNav, StyledNav } from './Styles/Nav';

function Nav({ titles }: { titles: { title: string, for: string }[] }) {
  const navigate = useNavigate();

  return (
    <StyledNav>

      {titles.map((t) => (
        <StyledButtonNav
          key={ t.title }
          onClick={ () => navigate(t.for) }
        >
          <h2>
            {t.title}
          </h2>
        </StyledButtonNav>
      ))}

    </StyledNav>
  );
}

export default Nav;
