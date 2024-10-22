import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActPage from '../components/Product/ActPage';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchProductsDetails } from '../redux/Thunks/ProductDetailsThunk';
import Images from '../components/Product/Images';
import Infos from '../components/Product/Infos/Infos';
import Description from '../components/Product/Description';
import Products from '../components/Home/Products/Products';

const StyledMain = styled.main`
  section:nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 64px;
  }

  section:nth-child(4) {
    display: flex;
    margin-top: 64px;
    justify-content: center;
  }
`;

function Product() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetails(+id!));
  }, []);

  return (
    <StyledMain>
      <ActPage />
      <section>
        <Images />
        <Infos />
      </section>
      <Description />
      <section>
        <h2>Related Products</h2>
        <Products products={ [] } />
      </section>
    </StyledMain>
  );
}

export default Product;
