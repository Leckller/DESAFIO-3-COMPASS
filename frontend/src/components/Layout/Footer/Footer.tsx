import styled from 'styled-components';
import Present from '../../../Assets/Footer/Present.svg';
import Suport from '../../../Assets/Footer/Suport.svg';
import Trophy from '../../../Assets/Footer/Trophy.svg';
import Verify from '../../../Assets/Footer/Verify.svg';
import ITheme from '../../../Utils/Themes';
import media from '../../../Utils/media';

function Footer() {
  const qualities = [
    {
      img: Trophy,
      title: 'High Quality',
      desc: 'crafted from top materials',
    },
    {
      img: Verify,
      title: 'Warranty Protection',
      desc: 'Over 2 years',
    },
    {
      img: Present,
      title: 'Free Shipping',
      desc: 'Order over 150 $',
    },
    {
      img: Suport,
      title: '24 / 7 Support',
      desc: 'Dedicated support',
    },
  ];

  const StyledQuality = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(p) => (p.theme as ITheme).Gold_sm};
    flex-wrap: wrap;
    gap: 16px;
    padding: 64px;

    ${media.sm`
      justify-content: space-between;
    `}

    article {
      display: flex;
      gap: 8px;
      
      img {
        width: 60px;
        height: 60px;
      }
        
      article {
          display: flex;
          flex-direction: column;
          gap: 8px;

          h3 {
            color: ${(p) => (p.theme as ITheme).TextColor}
          }
          h4 {
            color: ${(p) => (p.theme as ITheme).TextColor_md}
          }
        }
    }
  `;

  const StyledFooter = styled.footer`
    margin-top: 64px;
  `;

  return (
    <StyledFooter>
      <StyledQuality>
        {qualities.map((q) => (
          <article key={ q.title }>
            <img src={ q.img } alt={ q.title } />
            <article>
              <h3>{q.title}</h3>
              <h4>{q.desc}</h4>
            </article>
          </article>
        ))}
      </StyledQuality>
      <section />
      <section>
        <small>2023 furniro. All rights reverved</small>
      </section>
    </StyledFooter>
  );
}

export default Footer;
