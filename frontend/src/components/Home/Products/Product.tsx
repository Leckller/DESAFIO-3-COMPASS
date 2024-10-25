import { IProduct } from '../../../types/Product.Type';
import BubbleInfo from './BubbleInfo';
import { discount } from '../../../Utils/discount';
import { StyledProduct } from './Styles/Product';
import Hover from './Hover';

function Product({ product }: { product: IProduct }) {
  return (
    <StyledProduct>

      <img
        src={ product?.images[0]?.image?.imageLink }
        alt="product"
      />
      <BubbleInfo
        date={ product.create_date }
        discount={ product.discount_percent }
      />
      <article>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <p>{product.price}</p>
          {product.discount_percent > 0 && (
            <p>{discount(product.price, product.discount_percent)}</p>
          )}
        </div>
      </article>

      <Hover id={ product.id } name={ product.name } />
    </StyledProduct>

  );
}

export default Product;
