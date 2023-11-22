export const getQuantityByKey = (array, key, value) => {
  return array.filter(item => item[key] === value).length;
};
