import React, { useState, } from 'react';
import { ProductCard } from "..";
import Slider from "react-slick";
import { Button } from "@components/atoms";

// Import css files
// import "slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { CatalogProducts_shop_homepageCollection_products_edges } from "./gqlTypes/CatalogProducts";

type Props = {
  products: CatalogProducts_shop_homepageCollection_products_edges[];
};
const ProductSlider: React.FC<Props> = (products) => {  
  
  const config = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '3px'
  };
  const play = () => {
    this.slider.slickPlay();
  }
  const pause = () => {
    this.slider.slickPause();
  }
  const [settings, setSettings] = useState(config);
  
  const data = products.products;
  
  return (
    <div className="App">
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {data.map(({ node }) => (
          <ProductCard
            id={node.id}
            name={node.name}
            slug={node.slug}
            thumbnailUrl={!node.thumbnail ? "http://localhost:8000/media/__sized__/products/saleordemoproduct_paints_01-thumbnail-255x255.png" : node.thumbnail.url }
            pricing={node.pricing}
            variantsIDs={node.variants}
            key={node.id}
          />
        ))}
      </Slider>
      <div className="catalog-products">          
        <div style={{ textAlign: "center" }}>
          <Button
            color="primary"
            onClick={() =>
              play()
            }
          >
            Play
          </Button>
          <Button
            color="secondary"
            onClick={() =>
              pause()
            }
          >
            Pause
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;