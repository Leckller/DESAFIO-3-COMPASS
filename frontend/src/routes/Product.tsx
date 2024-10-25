import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActPage from '../components/Product/ActPage';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchProductsDetails } from '../redux/Thunks/ProductDetailsThunk';
import Images from '../components/Product/Images';
import Infos from '../components/Product/Infos/Infos';
import Description from '../components/Product/Description';
import Products from '../components/Home/Products/Products';
import { StyledProductMain } from './Styles/Product';

function Product() {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((s) => s.Product);
  const productParams = useParams();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetails(+id!));
  }, [productParams.id]);

  return (
    <StyledProductMain>
      <ActPage />
      <section>
        <Images />
        <Infos />
      </section>
      <Description />
      {product?.relatedProducts?.length > 0 && (
        <section>
          <h2>Related Products</h2>
          <Products
            products={ product.relatedProducts || [] }
            more={ `shop/${product.category.name}/0` }
          />
        </section>
      )}
    </StyledProductMain>
  );
}

export default Product;
