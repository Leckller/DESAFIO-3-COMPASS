import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchCategoryProducts } from '../../redux/Thunks/CategoryProductsThunk';
import ITheme from '../../Utils/Themes';

const StyledFilter = styled.section`
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    background-color: ${(p) => (p.theme as ITheme).Gold_md} !important;
    padding: 16px;

    section {
      display: flex;
      flex-direction: row !important;
      gap: 16px;

      label {
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        input {
          width: 31px;
        }

        input, select {
          outline: none;
          border: none;
          padding: 8px;
        }
      }
    }
  `;

function Filter() {
  const { category } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (category) {
      dispatch(fetchCategoryProducts(category));
    }
  }, []);

  return (
    <StyledFilter>

      <section>
        <button>
          <img src="" alt="Filter" />
          Filter
        </button>
        <button>
          a
          <img src="" alt="" />
        </button>
        <button>
          a
          <img src="" alt="" />
        </button>
      </section>

      <section>
        <label>
          Show
          <input type="number" defaultValue={ 16 } max={ 24 } />
        </label>
        <label>
          Short by
          <select>
            <option value="default">Default</option>
            <option value="lowest">Lowest price</option>
            <option value="highest">Highest price</option>
            <option value="discount">Discount</option>
          </select>
        </label>
      </section>

    </StyledFilter>
  );
}

export default Filter;
