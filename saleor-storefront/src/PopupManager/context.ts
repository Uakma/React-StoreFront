import { createContext } from "react";
import {
  WISHLIST_POPUP,
  SHOPPING_BAG_POPUP,
  PRODUCT_INFO_POPUP,
} from "./constants";

export const AUTH_POPUPS = {
  LOGIN: "LOGIN",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  USER: "USER",
};

export type PopupTypes =
  | keyof typeof AUTH_POPUPS
  | typeof WISHLIST_POPUP
  | typeof SHOPPING_BAG_POPUP
  | typeof PRODUCT_INFO_POPUP;

type Item = {
  id: string;
  quantity: number;
};

export type WishListPopupState = {
  items: Item[];
  addItem: (id: string, quantity: number) => void;
  updateItem: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
};

export type PopupManagerProviderState = {
  openedPopup: PopupTypes | keyof typeof AUTH_POPUPS | null;
};

export type PopupManagerContextType = {
  hide: () => void;
  show: (type: PopupTypes) => void;
  darken: () => void;
  unDarken: () => void;
  wishList: WishListPopupState;
} & PopupManagerProviderState;

export const popupManagerContext = createContext<PopupManagerContextType>(null);
