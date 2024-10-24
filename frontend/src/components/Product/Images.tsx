import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { ProductImage } from '../../types/ProductDetails.Type';
import ITheme from '../../Utils/Themes';
import media from '../../Utils/media';

const StyledImages = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 16px;
  padding: 16px;
  
  ${media.md`
    flex-direction: column;
    width: 100%;
  `}
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    ${media.md`
      flex-wrap: wrap;
      flex-direction: row;  
    `}
    
    button {
      border: none;
      background-color: transparent;
      border-radius: 8px;
      overflow: hidden;
      width: 76px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  img {
    background-color: ${(p) => (p.theme as ITheme).Gold_sm};
    max-width: 450px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    ${media.md`
      width: 100%;
    `}
  }

`;

function Images() {
  const { product, loading } = useAppSelector((s) => s.Product);

  const [images, setImages] = useState<ProductImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<ProductImage>();

  useEffect(() => {
    if ('images' in product) {
      setImages(product.images.slice(1));
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleClick = (img: ProductImage) => {
    const indexImg = images.findIndex((i) => i.id === img.id);
    images[indexImg] = selectedImage!;
    setImages([...images]);
    setSelectedImage(img);
  };

  if (loading) return <section>Loading</section>;

  return (
    <StyledImages>
      <section>
        {images.slice(0, 5).map((img) => (
          <button
            onClick={ () => handleClick(img) }
            key={ img.image.id }
          >
            <img
              src={ img.image.imageLink }
              alt={ product.name }
            />
          </button>
        ))}
        {images.slice(5).length > 0 && (
          <button>
            {images.slice(5).length}
          </button>
        )}
      </section>
      <img src={ selectedImage?.image.imageLink } alt={ product.name } />
    </StyledImages>
  );
}

export default Images;
