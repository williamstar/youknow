/* eslint-disable */
export function chop(length) {
  /* eslint-disable */
  return function (str) {
    let nstr = '';
    let maxLength = length + Math.floor(length / 5);
    if( str === undefined || str.length < maxLength) {
      return str;
    }
    for (let i = 0; i < maxLength; i += 1) {
      nstr += str[i];
    }
    return `${nstr}...`;
  };
}
