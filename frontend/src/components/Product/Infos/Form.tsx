import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ITheme from '../../../Utils/Themes';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { editProductInCart } from '../../../redux/Reducers/Cart';

const StyledForm = styled.form`
  border-bottom: 1px solid ${(p) => (p.theme as ITheme).TextColor_sm};
  justify-content: center;
  padding-bottom: 32px;
  flex-wrap: wrap;
  display: flex;
  gap: 16px;

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
  const { Product: { product }, Cart: { cart } } = useAppSelector((s) => s);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productInCart = cart.find(({ product: { id } }) => id === product.id);
    if (productInCart) { setQuantity(productInCart.quantity); }
  }, []);

  return (
    <StyledForm onSubmit={ (e) => e.preventDefault() }>
      <section>
        <button onClick={ () => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1)) }>
          -
        </button>
        <h4>{quantity}</h4>
        <button onClick={ () => setQuantity((prev) => prev + 1) }>
          +
        </button>
      </section>
      <button onClick={ () => dispatch(editProductInCart({ product, quantity })) }>
        Add to cart
      </button>
      <button>+ Compare</button>
    </StyledForm>
  );
}

export default Form;
