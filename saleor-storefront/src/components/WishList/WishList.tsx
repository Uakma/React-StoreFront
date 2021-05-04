import React, { useContext } from "react";
import "./scss/index.scss";

import { popupManagerContext, WISHLIST_POPUP } from "../../PopupManager";
import { Popup, Button } from "..";
import Heart from "../../images/heart-outlined.svg";
import { SmallProductCard } from "..";
import { TypedProductByIDQuery } from "./queries";

import { Checkout_lines_variant_pricing } from "@temp/@sdk/fragments/gqlTypes/Checkout";
import { generateProductUrl } from "@temp/core/utils";

const WishList: React.FC = () => {
  const context = useContext(popupManagerContext);

  return (
    <Popup
      opened={context.openedPopup === WISHLIST_POPUP}
      handleClose={context.hide}
    >
      <div className="wish-list">
        <div className="wish-list__heading">
          <Heart className="wish-list__heart" />
          <h3 className="wish-list__title">Wish List</h3>
        </div>
        {context.wishList.items.map(item => (
          <TypedProductByIDQuery variables={{ id: item.id }} key={item.id}>
            {({ data }) => {
              return (
                <SmallProductCard
                  url={generateProductUrl(data.product.slug, data.product.id)}
                  name={data.product.name}
                  thumbnail={data.product.thumbnail.url}
                  pricing={
                    (data.product
                      .pricing as unknown) as Checkout_lines_variant_pricing
                  }
                  initialProductCount={item.quantity}
                  onQuantity={quantity =>
                    context.wishList.updateItem(item.id, quantity)
                  }
                  onRemove={() => context.wishList.removeItem(item.id)}
                />
              );
            }}
          </TypedProductByIDQuery>
        ))}
        <Button color="yellow">Go to shopping cart</Button>
      </div>
    </Popup>
  );
};

export default WishList;
