import compareDates from '../../../Utils/compareDate';
import { StyledBubbleInfo } from './Styles/BubbleInfo';

function BubbleInfo({ date, discount }: { date: string, discount: number }) {
  const isNew = !compareDates(date);
  const isPromo = discount > 0;
  const color = isPromo ? 'red' : 'blue';

  if (!isNew && !isPromo) return;

  return (
    <StyledBubbleInfo color={ color }>
      {isPromo ? `-${discount}%` : 'New'}
    </StyledBubbleInfo>
  );
}

export default BubbleInfo;
