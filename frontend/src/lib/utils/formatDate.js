export function getYearFromString(date) {
  const dateFromString = Date.parse(date);
  return new Date(dateFromString).getFullYear();
}

export function getMonthFromString(date) {
  const dateFromString = Date.parse(date);
  return new Date(dateFromString).getMonth();
}
