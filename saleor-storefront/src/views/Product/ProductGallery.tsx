import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./scss/product-gallery.scss";

import Prev from "../../images/arrow-prev.svg";
import Next from "../../images/arrow-next.svg";
import { ProductDetails_product_images } from "./gqlTypes/ProductDetails";

type Props = {
  images: ProductDetails_product_images[];
};

const ProductGallery: React.FC<Props> = ({ images }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 990px)" });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    const updatedIndex = currentIndex - 1;

    setCurrentIndex(updatedIndex < 0 ? images.length - 1 : updatedIndex);
  };

  const next = () => {
    const updatedIndex = currentIndex + 1;

    setCurrentIndex(updatedIndex >= images.length ? 0 : updatedIndex);
  };

  return (
    <div className="product-gallery">
      <div
        className="product-gallery__main-image"
        style={{ background: `url(${images[currentIndex].url})` }}
      >
        <div className="product-gallery__prev" onClick={prev}>
          <Prev />
        </div>
        <div className="product-gallery__next" onClick={next}>
          <Next />
        </div>
      </div>

      <div className="product-gallery__other-images">
        {isTablet &&
          images
            .filter((_, index) => index !== currentIndex)
            .map((image, index) => (
              <div
                className="product-gallery__other-images__image"
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => setCurrentIndex(index)}
                key={image.id}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default ProductGallery;
