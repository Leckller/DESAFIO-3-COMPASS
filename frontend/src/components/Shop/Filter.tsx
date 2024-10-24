import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setShow } from '../../redux/Reducers/Filter';
import { sortProducts } from '../../redux/Reducers/Products';
import { ISort } from '../../types/Sort.Type';
import { fetchCategoryProducts } from '../../redux/Thunks/CategoryProductsThunk';
import { fetchProducts } from '../../redux/Thunks/ProductsThunk';
import { StyledFilter } from './Styles/Filter';

function Filter() {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { Filter: { show, page }, Product: { countProducts } } = useAppSelector((s) => s);

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
          <input
            onChange={ ({ target: { value } }) => {
              dispatch(setShow(+value));
              if (category) {
                dispatch(fetchCategoryProducts({ category, page, show: +value }));
              } else {
                dispatch(fetchProducts({ page, show: +value }));
              }
            } }
            type="number"
            defaultValue={ show }
            min={ 1 }
            max={ countProducts || 8 }
          />
        </label>
        <label>
          Sort by
          <select
            onChange={ ({ target: { value } }) => {
              dispatch(
                sortProducts(value as ISort),
              );
            } }
          >
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
