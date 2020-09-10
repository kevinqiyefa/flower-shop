/* eslint-disable indent */
import * as actionTypes from '../../actions/actionTypes';

import {
  updateCategory,
  fetchCategoryStart,
  fetchCategoryFail,
  fetchCategorySuccess,
} from './utils';

const initialState = {
  category: {},
  selected: { value: 'all', label: 'All' },
  error: null,
  loadingCategory: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CATEGORY:
      return updateCategory(state, action);
    case actionTypes.FETCH_CATEGORY_REQUEST:
      return fetchCategoryStart(state);
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return fetchCategorySuccess(state, action);
    case actionTypes.FETCH_CATEGORY_FAIL:
      return fetchCategoryFail(state, action);
    default:
      return state;
  }
};

export default reducer;
