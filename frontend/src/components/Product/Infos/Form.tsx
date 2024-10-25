import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { editProductInCart } from '../../../redux/Reducers/Cart';
import { StyledForm } from './Styles/Form';

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
