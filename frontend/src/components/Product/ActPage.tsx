import { useLocation, useParams } from 'react-router-dom';
import { StyledActPage } from './Styles/ActPage';

function ActPage() {
  const { pathname } = useLocation();
  const { item } = useParams();
  const path = pathname.split('/')
    .splice(1, pathname.split('/').length)
    .slice(0, pathname.split('/').length - 3);

  return (
    <StyledActPage>
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
    </StyledActPage>
  );
}

export default ActPage;
