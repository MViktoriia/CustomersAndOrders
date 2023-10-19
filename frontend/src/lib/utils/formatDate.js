export function getYearFromString(date) {
  const dateFromString = Date.parse(date);
  return new Date(dateFromString).getFullYear();
}

export function getMonthFromString(date) {
  const dateFromString = Date.parse(date);
  return new Date(dateFromString).getMonth();
}

export function formatDate(date) {
  const dd = date.getDate();
  let ddToString = dd.toString();
  if (dd < 10) {
    ddToString = '0' + dd;
  }

  const mm = date.getMonth() + 1;
  let mmToString = mm.toString();

  if (mm < 10) {
    mmToString = '0' + mmToString;
  }

  let yyyy = date.getFullYear();

  return yyyy + '-' + mmToString + '-' + ddToString;
}
