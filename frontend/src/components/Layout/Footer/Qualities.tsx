import { qualitiesArray } from '../../../Utils/qualitiesArray';
import { StyledQualities } from './Styles/Qualities';

function Qualities() {
  return (
    <StyledQualities>
      {qualitiesArray.map((q) => (
        <article key={ q.title }>
          <img src={ q.img } alt={ q.title } />
          <article>
            <h3>{q.title}</h3>
            <h4>{q.desc}</h4>
          </article>
        </article>
      ))}
    </StyledQualities>
  );
}

export default Qualities;
