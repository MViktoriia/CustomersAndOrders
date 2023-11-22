import { getMonthFromString, getYearFromString } from './formatDate';

export const getSumByMonth = (month, year, data) => {
  return data
    .filter(
      item =>
        getMonthFromString(item.date) === month &&
        getYearFromString(item.date) === year
    )
    .map(item => item.sum)
    .reduce((prevVal, curVal) => Number(prevVal) + Number(curVal), 0);
};
export const getSumByYear = (year, data) => {
  return data
    .filter(item => getYearFromString(item.date) === year)
    .map(item => item.sum)
    .reduce((prevVal, curVal) => Number(prevVal) + Number(curVal), 0);
};
