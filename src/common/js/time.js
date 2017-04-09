const formatTime = (date, fmt) => {
  const obj = {
    '(y+)': date.getFullYear(),
    '(m+)': date.getMonth() + 1,
    '(d+)': date.getDate(),
    '(H+)': date.getHours(),
    '(M+)': date.getMinutes(),
    '(S+)': date.getSeconds(),
  };
  Object.keys(obj).forEach((key) => {
    if (new RegExp(key).test(fmt)) {
      console.log(RegExp.$1);
      fmt = fmt.replace(RegExp.$1, obj[key]);
    }
  });
  return fmt;
};

export default formatTime;
