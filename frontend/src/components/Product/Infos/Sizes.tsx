import { useAppSelector } from '../../../hooks/reduxHooks';

function Sizes() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <article>
      Size
      {product.sizes?.map((size) => (
        <button key={ size.id }>
          {size.size}
        </button>
      ))}
    </article>
  );
}

export default Sizes;
