import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ITheme from '../../Utils/Themes';

const StyledSection = styled.section`
  display: flex;
  background-color: ${(p) => (p.theme as ITheme).Gold_sm};
  gap: 8px;
  padding: 32px;
  padding-left: 64px;
`;

function ActPage() {
  const { pathname } = useLocation();
  const { item } = useParams();
  const path = pathname.split('/')
    .splice(1, pathname.split('/').length)
    .slice(0, pathname.split('/').length - 3);

  return (
    <StyledSection>
      {path && (
        <p>
          {
            path.map((p) => (
              path.length === 1 ? ` ${p}` : ` ${p} >`
            ))
          }
          {` | ${item}`}
        </p>
      )}
    </StyledSection>
  );
}

export default ActPage;
