import { useAppSelector } from '../../../hooks/reduxHooks';

function Notes() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <section>
      <label>
        SKU:
        <p>{product?.sku}</p>
      </label>
      <label>
        Category:
        <p>{product?.category?.name}</p>
      </label>
      <label>
        Tags:
        <p>{`TODO ${product.id}`}</p>
      </label>
      <label>
        Share:
        <a href="www.google.com" target="_blank">{`Google ${product.id}`}</a>
      </label>
    </section>
  );
}

export default Notes;
