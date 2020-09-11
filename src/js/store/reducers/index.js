import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import category from './category';
import cart from './cart';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  //combine all the reducers here
  category,
  cart,
});

export default persistReducer(persistConfig, rootReducer);
