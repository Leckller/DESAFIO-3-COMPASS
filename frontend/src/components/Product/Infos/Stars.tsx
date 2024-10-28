import { useAppSelector } from '../../../hooks/reduxHooks';
import { StyledStars } from './Styles/Stars';
import starImg from '../../../Assets/star.svg';
import halfStarImg from '../../../Assets/star-half.svg';

function Stars() {
  const { product } = useAppSelector((s) => s.Product);

  const media = product?.reviews?.reduce((prev: number, curr, i, ar) => {
    if (i >= (ar.length - 1)) {
      const result = (prev + curr.stars) / ar.length;
      if (result > 5) return 5;
      if (result < 0) return 0;
      return result;
    }
    return prev + curr.stars;
  }, 0);

  const stars = [];
  for (let i = 0; media + 1 > i; i++) {
    if (media % 1 !== 0 && i > (media - 1)) {
      stars.push(halfStarImg);
      break;
    }
    stars.unshift(starImg);
  }

  return (
    <StyledStars>
      <article>
        {stars?.map((star, i) => (
          <img key={ i } src={ star } alt="star" />
        ))}
      </article>
      <p>{`${product?.reviews?.length} Customer Review`}</p>
    </StyledStars>
  );
}

export default Stars;
