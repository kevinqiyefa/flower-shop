const randomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUID = () => Math.random().toString(36).substr(2, 9);

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export { randomInt, getUID, updateObject };
