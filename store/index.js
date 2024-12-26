import CartItemReducer from "../slices/CartItemReducer";
import WishListReducer from "../slices/WishListReducer";
import ProductReducer from "../slices/ProductReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cartItems: CartItemReducer,
    wishLists: WishListReducer,
  },
});
