import { useLocation } from 'react-router-dom';
import ShopImg from '../../Assets/Shop/ShopImg.jpeg';
import { StyledBanner } from './Styles/Banner';

function Banner() {
  const { pathname } = useLocation();
  const path = pathname.slice(1, pathname.length).split('/');

  return (
    <StyledBanner>
      <img src={ ShopImg } alt="Shop" />
      <article>
        <h2>Shop</h2>
        {path.length > 1 && (
          <p>
            {
              path.map((p, i) => (
                i === path.length - 1 ? ` ${p}` : ` ${p} >`
              ))
            }
          </p>
        )}
      </article>
    </StyledBanner>
  );
}

export default Banner;
