import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';
import compareDates from '../../../Utils/compareDate';

function BubbleInfo({ date, discount }: { date: string, discount: number }) {
  const isNew = !compareDates(date);
  const isPromo = discount > 0;

  const color = isPromo ? 'red' : 'blue';

  const StyledArticle = styled.article`
        background-color: ${(prop) => (prop.theme as ITheme)[color]} !important;
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

  if (!isNew && !isPromo) return;

  return (
    <StyledArticle>
      {isPromo ? `-${discount}%` : 'New'}
    </StyledArticle>
  );
}

export default BubbleInfo;
