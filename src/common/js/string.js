export function chop(length) {
  /* eslint-disable */
  return function (str) {
    let nstr = '';

    let maxLength = length + Math.floor(length / 6);
    if (str === undefined || str.length < maxLength) {
      return str;
    }
    for (let i = 0; i < maxLength; i += 1) {
      nstr += str[i];
    }
    return `${nstr}...`;
  };
}

export function htmlToText(html) {
  let text = "";
  let ignore = false;
  for (let i = 0; i < html.length; i++) {
    let c = html.charAt(i);
    if (ignore) {
      if (c === '>') {
        // 开始接收字符串
        ignore = false;
      }
    } else {
      if (c === '<') {
        // 开启忽略模式
        ignore = true;
      } else {
        text += c;
      }
    }
  }
  return text;
}
