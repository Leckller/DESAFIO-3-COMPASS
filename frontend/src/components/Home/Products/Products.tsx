import styled from 'styled-components';
import Product from './Product';
import ITheme from '../../../Utils/Themes';
import media from '../../../Utils/media';
import { IProduct } from '../../../types/Product.Type';

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

function Products({ products }: { products: IProduct[] }) {
  return (

    <StyledSection>
      <section>
        {products.length > 0 && products.map((product) => (
          <Product product={ product } key={ product.id } />
        ))}
      </section>
    </StyledSection>

  );
}

export default Products;
