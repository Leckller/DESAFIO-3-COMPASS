import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ITheme from '../../Utils/Themes';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setPage } from '../../redux/Reducers/Filter';
import { fetchCategoryProducts } from '../../redux/Thunks/CategoryProductsThunk';
import { fetchProducts } from '../../redux/Thunks/ProductsThunk';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
`;

const StyledButton = styled.button`
  background-color: ${(p) => (p.color === '1'
    ? (p.theme as ITheme).gold : (p.theme as ITheme).Gold_md)};
  border: none;
  padding: 16px;
  border-radius: 8px;
  min-width: 50px;
  min-height: 50px;
`;

function Pages() {
  const {
    Product: { countProducts },
    Filter: { show, page },
  } = useAppSelector((s) => s);

  const [pages, setPages] = useState(['']);
  const dispatch = useAppDispatch();
  const { category } = useParams();

  useEffect(() => {
    const calc = Math.ceil((+countProducts / show));
    const pagesArray = new Array(calc).fill('undefined');
    setPages(pagesArray);
  }, [countProducts, show]);

  return (
    <StyledSection>
      {countProducts > show && (
        <>
          <StyledButton
            disabled={page === 0}
            onClick={() => {
              dispatch(setPage(page - 1));
              if (category) {
                dispatch(fetchCategoryProducts({ category, page: page - 1, show }))
              } else {
                dispatch(fetchProducts({ page: page - 1, show }));
              }
            }}
          >
            Previous
          </StyledButton>
          {pages.map((_, i) => (
            <StyledButton
              color={page === i ? '1' : '0'}
              onClick={() => {
                dispatch(setPage(i));
                if (category) {
                  dispatch(fetchCategoryProducts({ category, page: i, show }))
                } else {
                  dispatch(fetchProducts({ page: i, show }));
                }
              }}
              key={i}
            >
              {i + 1}
            </StyledButton>
          ))}
          <StyledButton
            disabled={(pages.length - 1) === page}
            onClick={() => {
              dispatch(setPage(page + 1));
              if (category) {
                dispatch(fetchCategoryProducts({ category, page: page + 1, show }))
              } else {
                dispatch(fetchProducts({ page: page + 1, show }));
              }
            }}
          >
            Next
          </StyledButton>
        </>
      )}
    </StyledSection>
  );
}

export default Pages;
