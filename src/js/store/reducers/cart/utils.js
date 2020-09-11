import { updateObject } from '../../../utilities/general';

export const addCartItem = (state, cartItemToAdd) => {
  const { cartItems } = state;
  let updatedCartItems;

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? updateObject(cartItem, { quantity: cartItem.quantity + 1 })
        : cartItem
    );
  } else {
    updatedCartItems = [...cartItems, updateObject(cartItemToAdd, { quantity: 1 })];
  }

  return updateObject(state, { cartItems: updatedCartItems });
};

export const removeCartItem = (state, cartItemToRemove) => {
  const { cartItems } = state;
  let updatedCartItems;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
  } else {
    updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? updateObject(cartItem, { quantity: cartItem.quantity - 1 })
        : cartItem
    );
  }

  return updateObject(state, { cartItems: updatedCartItems });
};

export const clearItemFromCart = (state, itemToBeClear) => {
  let updatedCartItems = state.cartItems.filter(
    (cartItem) => cartItem.id !== itemToBeClear.id
  );

  return updateObject(state, { cartItems: updatedCartItems });
};
