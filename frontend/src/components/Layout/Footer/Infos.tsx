import { StyledInfos } from './Styles/Infos';

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
