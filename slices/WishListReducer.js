// action types

export const ADD_WISHLIST_ITEM = "add/wishListItem";
export const REMOVE_WISHLIST_ITEM = "delete/wishListItem";

// action creaters

export function addWishlistsItem(productId) {
  return {
    type: ADD_WISHLIST_ITEM,
    payload: { productId: productId },
  };
}
export function removeWishlistsItem(productId) {
  return {
    type: REMOVE_WISHLIST_ITEM,
    payload: { productId: productId },
  };
}

// reducer

export default function WishListReducer(state = [], action) {
  switch (action.type) {
    case ADD_WISHLIST_ITEM:
      return [...state, action.payload];
    case REMOVE_WISHLIST_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
