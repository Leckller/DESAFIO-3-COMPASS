import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { ProductImage } from '../../types/ProductDetails.Type';
import { StyledImages } from './Styles/Images';

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
