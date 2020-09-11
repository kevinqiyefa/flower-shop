/* eslint-disable indent */
import * as actionTypes from '../../actions/actionTypes';
import { addCartItem, removeCartItem, clearItemFromCart } from './utils';

const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      return addCartItem(state, action.product);
    case actionTypes.REMOVE_CART_ITEM:
      return removeCartItem(state, action.product);
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return clearItemFromCart(state, action.product);
    default:
      return state;
  }
};

export default reducer;
