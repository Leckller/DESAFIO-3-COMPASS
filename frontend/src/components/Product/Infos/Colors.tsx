import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';

function Colors() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <article>
      Color
      {product.colors?.map((color) => (
        <button
          style={ { backgroundColor: color.color } }
          key={ color.id }
        >
          {color.color}
        </button>
      ))}
    </article>
  );
}

export default Colors;
