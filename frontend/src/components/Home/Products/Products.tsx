import { useNavigate } from 'react-router-dom';
import Product from './Product';
import { IProduct } from '../../../types/Product.Type';
import { StyledProducts } from './Styles/Products';

function Products({ products, more = '' }: { products: IProduct[], more?: string }) {
  const navigate = useNavigate();

  return (

    <StyledProducts>
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
    </StyledProducts>

  );
}

export default Products;
