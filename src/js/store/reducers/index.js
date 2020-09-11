import { combineReducers } from 'redux';

import category from './category';
import cart from './cart';

const rootReducer = combineReducers({
  //combine all the reducers here
  category,
  cart,
});

export default rootReducer;
