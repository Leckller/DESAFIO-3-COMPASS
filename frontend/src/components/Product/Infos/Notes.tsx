import styled from 'styled-components';
import { useAppSelector } from '../../../hooks/reduxHooks';
import ITheme from '../../../Utils/Themes';

const StyledNotes = styled.section`
  color: ${(p) => (p.theme as ITheme).TextColor_sm};
  label {
    display: flex;
    gap: 16px;

    p:nth-child(1) {
      width: 60px;
    }
  }

`;

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
