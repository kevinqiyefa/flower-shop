import { updateObject } from '../../../utilities/general';

export const updateCategory = (state, action) => {
  return updateObject(state, {
    selected: action.selected,
  });
};

export const fetchCategoryStart = (state) => {
  return updateObject(state, { error: null, loadingCategory: true });
};

export const fetchCategorySuccess = (state, action) => {
  return updateObject(state, {
    category: action.category,
    error: null,
    loadingCategory: false,
  });
};

export const fetchCategoryFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loadingCategory: false,
  });
};
