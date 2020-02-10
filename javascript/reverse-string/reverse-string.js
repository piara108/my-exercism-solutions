// Exercise Name: Reverse String

export const reverseString = (str) => {
  let revStr = '';

  for(var x = str.length - 1; x >= 0; x--) { revStr += str[x] }

  return revStr;
};
