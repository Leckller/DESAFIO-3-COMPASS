import { useNavigate } from 'react-router-dom';
import Product from './Product';
import { IProduct } from '../../../types/Product.Type';
import { StyledProducts } from './Styles/Products';
import Empty from './Empty';

function Products({ products, more = '' }: { products: IProduct[], more?: string }) {
  const navigate = useNavigate();

  return (

    <StyledProducts>
      {products.length > 0 ? (
        <section>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </section>
      ) : (
        <Empty />
      )}
      {more && (
        <button
          onClick={() => {
            navigate(`/${more}`);
            window.scrollTo(0, 0);
          }}
        >
          Show More
        </button>
      )}
    </StyledProducts>

  );
}

export default Products;
