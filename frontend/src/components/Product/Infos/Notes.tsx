import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledNotes } from './Styles/Notes';

function Notes() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledNotes>
      <label>
        <p>SKU</p>
        :
        <p>{product?.sku}</p>
      </label>
      <label>
        <p>Category</p>
        :
        <p>{product?.category?.name}</p>
      </label>
      <label>
        <p>Tags</p>
        :
        <p>{`TODO ${product.id}`}</p>
      </label>
      <label>
        <p>Share</p>
        :
        <a href="www.google.com" target="_blank">{`Google ${product.id}`}</a>
      </label>
    </StyledNotes>
  );
}

export default Notes;
