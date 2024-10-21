import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../../services/Products/getProducts';
import { IProduct } from '../../../types/Product.Type';
import Product from './Product';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
`;

  return (

    <StyledSection>
      {products.map((product) => (
        <Product product={ product } key={ product.id } />
      ))}
    </StyledSection>

  );
}

export default Products;
