import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ShopImg from '../../Assets/Shop/ShopImg.jpeg';

const StyledSection = styled.section`
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 500px;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      img {
        object-fit: cover;
        height: 300px;
      }

      article {
        position: absolute;
        backdrop-filter: blur(5px);
        background-color: #ffffff44;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;
        align-items: center;
        h2 {
        }

      }
    `;

function Banner() {
  const { pathname } = useLocation();
  const path = pathname.slice(1, pathname.length).split('/');

  return (
    <StyledSection>
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
    </StyledSection>
  );
}

export default Banner;
