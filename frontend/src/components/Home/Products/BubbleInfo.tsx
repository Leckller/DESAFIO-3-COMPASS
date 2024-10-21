import styled from 'styled-components';
import compareDates from '../../../Utils/compareDate';

const StyledArticle = styled.article`
      background-color: ${(prop) => prop.theme[prop.color!]} !important;
      position: absolute;
      border-radius: 100%;
      height: 50px !important;
      width: 50px !important;
      right: 5%;
      top: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white !important;
  `;

function BubbleInfo({ date, discount }: { date: string, discount: number }) {
  const isNew = !compareDates(date);
  const isPromo = discount > 0;
  const color = isPromo ? 'red' : 'blue';

  if (!isNew && !isPromo) return;

  return (
    <StyledArticle color={ color }>
      {isPromo ? `-${discount}%` : 'New'}
    </StyledArticle>
  );
}

export default BubbleInfo;
