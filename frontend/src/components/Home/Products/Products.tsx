import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import ITheme from '../../../Utils/Themes';
import media from '../../../Utils/media';
import { IProduct } from '../../../types/Product.Type';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
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

function Products({ products, more = '' }: { products: IProduct[], more?: string }) {
  const navigate = useNavigate();

  return (

    <StyledSection>
      <section>
        {products.length > 0 && products.map((product) => (
          <Product product={ product } key={ product.id } />
        ))}
      </section>
      {more && (
        <button onClick={ () => navigate(`/${more}`) }>
          Show More
        </button>
      )}
    </StyledSection>

  );
}

export default Products;
