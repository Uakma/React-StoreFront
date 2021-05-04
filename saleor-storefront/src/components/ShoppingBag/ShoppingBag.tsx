import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./scss/index.scss";

import { popupManagerContext, SHOPPING_BAG_POPUP } from "../../PopupManager";
import { Popup, Button } from "..";
import Heart from "../../images/heart-outlined.svg";
import { SmallProductCard } from "..";
import { useCart } from "@sdk/react";
import { TaxedMoney } from "@temp/@next/components/containers";
import { generateProductUrl, slugify } from "@temp/core/utils";

const ShoppingBag: React.FC = () => {
  const context = useContext(popupManagerContext);
  const { items, removeItem, updateItem, totalPrice } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    updateItem(id, quantity);
  };

  const missingVariants = () => {
    return items.find(item => !item.variant || !item.totalPrice);
  };

  return (
    <Popup
      opened={context.openedPopup === SHOPPING_BAG_POPUP}
      handleClose={context.hide}
    >
      <div className="shopping-bag">
        <div className="shopping-bag__heading">
          <Heart className="shopping-bag__heart" />
          <h3 className="shopping-bag__title">Shopping Bag</h3>
        </div>
        {items && items.length ? (
          <>
            {missingVariants()
              ? "Loading..."
              : items.map(item => (
                  <SmallProductCard
                    url={generateProductUrl(
                      slugify(item.variant.product.name),
                      item.variant.product.id
                    )}
                    name={item.variant.product.name}
                    thumbnail={item.variant.product.thumbnail.url}
                    pricing={item.variant.pricing}
                    initialProductCount={item.quantity}
                    onQuantity={handleQuantityChange.bind(
                      null,
                      item.variant.id
                    )}
                    onRemove={() => removeItem(item.variant.id)}
                    key={item.id}
                  />
                ))}
            <div className="shopping-bag__total">
              <span>Total</span>
              <TaxedMoney taxedMoney={totalPrice} />
            </div>
          </>
        ) : null}
        <Link to="/checkout">
          <Button color="yellow" onClick={context.hide}>
            Go to shopping cart
          </Button>
        </Link>
      </div>
    </Popup>
  );
};

export default ShoppingBag;
