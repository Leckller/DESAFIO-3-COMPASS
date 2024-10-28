import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setShow, setSort } from '../../redux/Reducers/Filter';
import { sortProducts } from '../../redux/Reducers/Products';
import { ISort } from '../../types/Sort.Type';
import { fetchCategoryProducts } from '../../redux/Thunks/CategoryProductsThunk';
import { fetchProducts } from '../../redux/Thunks/ProductsThunk';
import { StyledFilter } from './Styles/Filter';
import rotateImg from '../../Assets/Filter/rotate.svg';
import filterImg from '../../Assets/Filter/filter.svg';
import layoutFilterImg from '../../Assets/Filter/LayoutFilter.svg';

function Filter() {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { countProducts } = useAppSelector((s) => s.Product);
  const { page, show, sort } = useAppSelector((s) => s.Filter);

  return (
    <StyledFilter>

      <section>
        <button onClick={() => {
          const limitPage = +show >= countProducts ? 0 : page;
          if (category) {
            dispatch(fetchCategoryProducts({
              category, page: limitPage, show: +show, sort
            }));
          } else {
            dispatch(fetchProducts({ page: limitPage, show: +show, sort }));
          }
        }}>
          <img src={filterImg} alt="Filter" />
          Filter
        </button>
        <button>
          <img src={layoutFilterImg} alt="layout" />
        </button>
        <button>
          <img src={rotateImg} alt="rotate" />
        </button>
        <p>
          {`Showing 1–${show > countProducts
            ? countProducts : show} of ${countProducts} results`}
        </p>
      </section>

      <section>
        <label>
          Show
          <input
            name='show'
            onChange={({ target: { value } }) => {
              dispatch(setShow(+value));
              const limitPage = +value >= countProducts ? 0 : page;
              if (category) {
                dispatch(fetchCategoryProducts({
                  category, page: limitPage, show: +value, sort
                }));
              } else {
                dispatch(fetchProducts({ page: limitPage, show: +value, sort }));
              }
            }}
            type="number"
            defaultValue={show}
            min={1}
            max={countProducts || 16}
          />
        </label>
        <label>
          Sort by
          <select
            name='sort'
            onChange={({ target: { value } }) => {
              dispatch(setSort(value as ISort));
              dispatch(
                sortProducts(value as ISort),
              );
            }}
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
