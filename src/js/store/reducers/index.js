import { combineReducers } from 'redux';

import category from './category';

const rootReducer = combineReducers({
  //combine all the reducers here
  category,
});

export default rootReducer;
