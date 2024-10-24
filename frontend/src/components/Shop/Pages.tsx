import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import Button from './Button';
import { StyledPages } from './Styles/Pages';

function Pages() {
  const [pages, setPages] = useState(['']);

  const {
    Product: { countProducts },
    Filter: { show, page },
  } = useAppSelector((s) => s);

  useEffect(() => {
    const calc = Math.ceil((+countProducts / show));
    const pagesArray = new Array(calc).fill('undefined');
    setPages(pagesArray);
  }, [countProducts, show]);

  return (
    <StyledPages>
      {countProducts > show && (
        <>
          <Button
            content="Previous"
            disabled={ page === 0 }
            page={ page - 1 }
          />
          {pages.map((_, i) => (
            <Button
              selected={ page === i }
              key={ i }
              content={ `${i + 1}` }
              disabled={ false }
              page={ i }
            />
          ))}
          <Button
            content="Next"
            disabled={ (pages.length - 1) === page }
            page={ page + 1 }
          />
        </>
      )}
    </StyledPages>
  );
}

export default Pages;
