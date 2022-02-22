import { configureStore } from "@reduxjs/toolkit";

const shoppingCartInitialState = [];

const userInitialState = false;

export const addItemToCartAction = "addItemToCart";

export const removeItemFromCartAction = "removeItemFromCart";

export const emptyCartAction = "emptyCart";

export const userSignedInAction = "userSignedIn";

export const userNotSignedInAction = "userNotSignedIn";

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  if (action.type === addItemToCartAction) {
    // write some logic to add item to cart

    // Check if the item is already in the cart
    const itemFoundInCart = state.find(
      (cartItem) => cartItem.id === action.cartItem.id
    );

    // if its not, we can add it at the end with a quantity of 1
    if (!itemFoundInCart) {
      return [...state, { ...action.cartItem, quantity: 1 }];
    }

    // if it is actually already in the cart
    // we will still remove it
    const cartWithFoundItemRemoved = state.filter(
      (item) => item.id !== action.cartItem.id
    );
    // but add it again with the correct updated quantity.
    return [
      ...cartWithFoundItemRemoved,
      { ...action.cartItem, quantity: itemFoundInCart.quantity + 1 },
    ];
  }

  if (action.type === removeItemFromCartAction) {
    // write some logic to remove item fromn cart

    return state.filter((item) => item.id !== action.itemId);
  }

  if (action.type === emptyCartAction) {
    // write some logic to empty the shopping cart
    return shoppingCartInitialState;
  }

  return state;
};

// On sign in, I'm getting the user name returned from "data.firstName"
// I need to set that as the state in redux so that I can access that in my header component to
//change the signin button to user name being displayed.

const userReducer = (state = userInitialState, action) => {
  if (action.type === userSignedInAction) {
    console.log("Signed In");
    return state;
  }
  if (action.type === userNotSignedInAction) {
    console.log("Not Signed In");
    return state;
  }
};

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  },
});

export default store;
