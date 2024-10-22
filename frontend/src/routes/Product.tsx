import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActPage from '../components/Product/ActPage';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchProductsDetails } from '../redux/Thunks/ProductDetailsThunk';
import Images from '../components/Product/Images';
import Infos from '../components/Product/Infos/Infos';

const StyledMain = styled.main`
  section:nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 32px;
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
    </StyledMain>

  );
}

export default Product;
