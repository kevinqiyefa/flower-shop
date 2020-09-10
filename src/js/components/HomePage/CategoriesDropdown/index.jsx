import React from 'react';

import Dropdown from 'react-dropdown';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchCategory, updateCategory } from '../../../store/actions';
import 'react-dropdown/style.css';

const CATEGORY_NAMES_CUSTOM = [
  { value: 'all', label: 'All' },
  { value: 'bouquet-bundles', label: 'Bouquet Bundles' },
  { value: 'popular', label: 'Popular' },
  { value: 'summer', label: 'Summer' },
];
const CATEGORY_NAMES_FLOWER_TYPES = [
  { value: 'callas', label: 'Callas' },
  { value: 'daisies', label: 'Daisies' },
  { value: 'lilies', label: 'Lilies' },
  { value: 'ranunculus', label: 'Ranunculus' },
  { value: 'roses', label: 'Roses' },
  { value: 'succulents', label: 'Succulents' },
  { value: 'sunflowers', label: 'Sunflowers' },
  { value: 'tulips', label: 'Tulips' },
];
const CATEGORY_NAMES_OCCASIONS = [
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'congratulations', label: 'Congratulations' },
  { value: 'sympathy', label: 'Sympathy' },
  { value: 'thank-you', label: 'Thank You' },
];

const CatergoriesDropdown = () => {
  const value = useSelector((state) => state.category.selected.value, shallowEqual);
  const label = useSelector((state) => state.category.selected.label, shallowEqual);

  const dispatch = useDispatch();

  const options = [
    ...CATEGORY_NAMES_CUSTOM,
    ...CATEGORY_NAMES_FLOWER_TYPES,
    ...CATEGORY_NAMES_OCCASIONS,
  ];

  const defaultOption = { value, label };

  const handleSelected = (op) => {
    if (op.value !== value) {
      dispatch(updateCategory(op));
      dispatch(fetchCategory(op.value));
    }
  };

  return <Dropdown options={options} onChange={handleSelected} value={defaultOption} />;
};

export default CatergoriesDropdown;
