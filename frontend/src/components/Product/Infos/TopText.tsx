import { useAppSelector } from '../../../hooks/reduxHooks';

function TopText() {
  const { product } = useAppSelector((s) => s.Product);

  return (
    <>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
    </>
  );
}

export default TopText;
