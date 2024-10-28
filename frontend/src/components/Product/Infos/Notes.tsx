import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledNotes, StyledWebLinks } from './Styles/Notes';
import FacebookImg from '../../../Assets/Sites/Facebook.svg';
import TwitterImg from '../../../Assets/Sites/Twitter.svg';
import LinkedinImg from '../../../Assets/Sites/Linkedin.svg';

function Notes() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <StyledNotes>
      <article>
        <p>SKU</p>
        :
        <p>{product?.sku}</p>
      </article>
      <article>
        <p>Category</p>
        :
        <p>{product?.category?.name}</p>
      </article>
      <article>
        <p>Tags</p>
        :
        {product?.tags?.map((tag) => (
          <p key={ tag.tag.id }>
            {tag.tag.name}
          </p>
        ))}
      </article>
      <StyledWebLinks>
        <p>Share</p>
        :
        <button>
          <img src={ FacebookImg } alt="facebook" />
        </button>
        <button>
          <img src={ LinkedinImg } alt="facebook" />
        </button>
        <button>
          <img src={ TwitterImg } alt="facebook" />
        </button>
      </StyledWebLinks>
    </StyledNotes>
  );
}

export default Notes;
