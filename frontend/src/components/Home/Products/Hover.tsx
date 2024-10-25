import { useNavigate } from 'react-router-dom';
import { StyledHover } from './Styles/Hover';
import LikeImg from '../../../Assets/HoverProduct/Like.svg';
import ShareImg from '../../../Assets/HoverProduct/Share.svg';
import CompareImg from '../../../Assets/HoverProduct/Compare.svg';

function Hover({ name, id }: { name: string, id: number }) {
  const navigate = useNavigate();
  return (
    <StyledHover>
      <button
        onClick={ () => {
          navigate(`/product/${name}/${id}`);
          window.scrollTo(0, 0);
        } }
      >
        See details
      </button>
      <section>
        <button>
          <img src={ ShareImg } alt="share" />
          Share
        </button>
        <button>
          <img src={ CompareImg } alt="compare" />
          Compare
        </button>
        <button>
          <img src={ LikeImg } alt="like" />
          Like
        </button>
      </section>
    </StyledHover>
  );
}

export default Hover;
