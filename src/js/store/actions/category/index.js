import { callAPI } from '../../../services/api';

import * as actionTypes from '../actionTypes';

export const updateCategory = (selected) => {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    selected,
  };
};

export const fetchCategoryStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORY_REQUEST,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    category,
  };
};

export const fetchCategoryFail = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAIL,
    error,
  };
};

export const fetchCategory = (curCategory) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoryStart());

      let path = `?slug=${curCategory}`;

      let [category] = await callAPI('GET', path, false);

      dispatch(fetchCategorySuccess(category));
    } catch (error) {
      dispatch(fetchCategoryFail(error));
    }
  };
};
