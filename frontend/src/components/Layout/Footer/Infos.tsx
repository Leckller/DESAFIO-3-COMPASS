import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

const StyledInfos = styled.article`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 32px;
  gap: 16px;

  h3 {
    color: ${(p) => (p.theme as ITheme).TextColor_sm};
    font-weight: 700;
  }

  a {
    color: ${(p) => (p.theme as ITheme).TextColor};
    font-weight: 700;
    text-decoration: none;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

function Infos() {
  return (
    <StyledInfos>

      <article>
        <h2>Furniro.</h2>
        <p>
          400 University Drive Suite 200 Coral Gables,
          FL 33134 USA
        </p>
      </article>

      <article>
        <h3>Links</h3>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/Contact">Contact</a>
      </article>

      <article>
        <h3>Help</h3>
        <a href="/info/payment">Payment Options</a>
        <a href="/info/returns">Returns</a>
        <a href="/info/policies">Privacy Policies</a>
      </article>

      <article>
        <h3>Newsletter</h3>
        <input type="text" placeholder="Enter Your Email Address" />
        <button>SUBSCRIBE</button>
      </article>

    </StyledInfos>
  );
}

export default Infos;
