import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';
import media from '../../../Utils/media';

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

  article:nth-child(1) {
    p {
      color: ${(p) => (p.theme as ITheme).TextColor_sm};
      ${media.sm`
        width: 100%;
      `};
      width: 50%;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    div {
      display: flex;
      gap: 8px;

      ${media.xs`
        flex-wrap: wrap;
      `}

      input {
        border: none;
        outline: none;
        width: 100%;
        border-bottom: solid 1px black;
        max-width: 250px;
      }

      button {
        border: none;
        background-color: transparent;
        border-bottom: solid 1px black;
      }
    }
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

      <form onSubmit={ (e) => e.preventDefault() }>
        <h3>Newsletter</h3>
        <div>
          <input type="text" placeholder="Enter Your Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </form>

    </StyledInfos>
  );
}

export default Infos;
