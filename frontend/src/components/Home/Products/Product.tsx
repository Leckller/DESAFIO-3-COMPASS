import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../types/Product.Type';
import ITheme from '../../../Utils/Themes';

function Product({ product }: { product: IProduct }) {
  const navigate = useNavigate();

  const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;

    & > div {
      background-color: ${(prop) => (prop.theme as ITheme).red};
      position: absolute;
      border-radius: 100%;
      height: 40px;
      width: 40px;
      right: 5%;
      top: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    img {
      object-fit: cover;
      width: 280px;
      height: 300px;
      border: none;
    }

    article {
      background-color: ${(prop) => (prop.theme as ITheme).gray};
      color: ${(prop) => (prop.theme as ITheme).TextColor};
      padding: 16px;
      gap: 8px;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: start;

      p {
        color: ${(prop) => (prop.theme as ITheme).TextColor_md};
      }

      div {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;

        p {
          color: ${(prop) => (prop.theme as ITheme).TextColor};
        }

        p:nth-child(2) {
          color: ${(prop) => (prop.theme as ITheme).TextColor_sm};
          text-decoration: line-through;
        }
      }
    }
  `;

  return (
    <StyledButton
      onClick={ () => navigate(`product/${product.name}`) }
    >
      <img src={ product?.images[0]?.image?.imageLink } alt="" />
      <div>
        {`${product.discount_percent}%`}
      </div>
      <article>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <p>{product.price}</p>
          {product.discount_percent > 0 && (
            <p>{product.price * ((100 - product.discount_percent) / 100)}</p>
          )}
        </div>
      </article>
    </StyledButton>

  );
}

export default Product;
