import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../../services/Products/getProducts';
import { IProduct } from '../../../types/Product.Type';
import Product from './Product';
import ITheme from '../../../Utils/Themes';
import media from '../../../Utils/media';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;

    & > button {
        display: flex;
        color: ${(prop) => (prop.theme as ITheme).gold};
        background-color: transparent;
        border: solid 1px ${(prop) => (prop.theme as ITheme).gold};
        padding: 8px 32px;
    }

    section {
        display: grid;
        column-gap: 16px;
        row-gap: 16px;
        grid-template-columns: auto auto auto auto;
    }

    ${media.lg`
      section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}
`;

  return (

    <StyledSection>
      <h2>
        Our Products
      </h2>

      <section>
        {products.map((product) => (
          <Product product={ product } key={ product.id } />
        ))}
      </section>
      <button>
        Show More
      </button>
    </StyledSection>

  );
}

export default Products;
