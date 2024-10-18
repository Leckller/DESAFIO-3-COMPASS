import styled from 'styled-components';
import PresentationImage from '../../Assets/Home/presentation.jpeg';
import ITheme from '../../Utils/Themes';

function Presentation() {
  const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        height: 300px;
    }

    article {
        position: absolute;
        right: 100px;
        bottom: 0;
        width: 40%;
        padding: 20px;
        min-height: 100px;
        min-width: 200px;
        background-color: ${(props) => (props.theme as ITheme).Gold_md};

    }

  `;

  return (
    <StyledSection>
      <img src={ PresentationImage } alt="sala de estar" />
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut elit tellus, luctus nec ullamcorper mattis.
      </article>
    </StyledSection>
  );
}

export default Presentation;
