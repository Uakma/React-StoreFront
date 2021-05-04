import React, { useState } from "react";
import {
  popupManagerContext,
  PopupManagerContextType,
  PopupManagerProviderState,
  PopupTypes,
  WishListPopupState,
} from "./context";

const PopupManagerProvider: React.FC = ({ children }) => {
  const [wishListItems, setWishListItems] = useState<
    WishListPopupState["items"]
  >([]);
  const [state, setState] = useState<PopupManagerProviderState>({
    openedPopup: null,
  });

  const [darkened, setDarkened] = useState<boolean>(false);

  const hide = () => {
    setState({
      ...state,
      openedPopup: null,
    });
    setDarkened(false);
  };

  const show = (type: PopupTypes) => {
    setState({
      ...state,
      openedPopup: type,
    });
    setDarkened(true);
  };

  const darken = () => {
    setDarkened(true);
  };

  const unDarken = () => {
    setDarkened(false);
  };

  const addItem = (id: string, quantity: number) => {
    if (!wishListItems.find(item => item.id === id)) {
      setWishListItems([...wishListItems, { id, quantity }]);
    }
  };

  const updateItem = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setWishListItems(
        wishListItems.map(item =>
          item.id === id ? { id, quantity: newQuantity } : item
        )
      );
    } else {
      removeItem(id);
    }
  };

  const removeItem = (id: string) => {
    if (wishListItems.find(item => item.id === id)) {
      setWishListItems(wishListItems.filter(item => item.id !== id));
    }
  };

  const toggleItem = (id: string) => {
    if (wishListItems.find(item => item.id === id)) {
      removeItem(id);
    } else {
      addItem(id, 1);
    }
  };

  const initialContextValue: PopupManagerContextType = {
    ...state,
    hide,
    show,
    darken,
    unDarken,
    wishList: {
      items: wishListItems,
      addItem,
      updateItem,
      removeItem,
      toggleItem,
    },
  };

  return (
    <popupManagerContext.Provider value={initialContextValue}>
      <div
        style={{
          display: darkened ? "block" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          background: "rgba(0, 0, 0, 0.4)",
          width: "100vw",
          height: document.body.scrollHeight,
        }}
      ></div>
      {children}
    </popupManagerContext.Provider>
  );
};

export default PopupManagerProvider;
