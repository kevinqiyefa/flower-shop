/* eslint-disable indent */
// import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  category: {},
  selected: { value: 'all', label: 'All' },
  error: null,
  loadingCategory: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
