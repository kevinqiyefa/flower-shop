import * as actionTypes from '../actionTypes';

export const addItem = (product) => ({
  type: actionTypes.ADD_CART_ITEM,
  product,
});

export const removeItem = (product) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  product,
});

export const clearItem = (product) => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  product,
});
