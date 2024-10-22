import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(p) => (p.theme as ITheme).TextColor_sm};

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.theme as ITheme).TextColor_sm};

    button {
      border: none;
    }
  }

  button {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${(p) => (p.theme as ITheme).TextColor};
    font-size: 1.2rem;
  }
`;

function Form() {
  return (
    <StyledForm onSubmit={ (e) => e.preventDefault() }>
      <section>
        <button>-</button>
        <h4>1</h4>
        <button>+</button>
      </section>
      <button>Add to cart</button>
      <button>+ Compare</button>
    </StyledForm>
  );
}

export default Form;
