import { checkServerIdentity } from "tls";

// Exercise: Pig Latin

export class translator {
  static translate(str) {
    const suffix = 'ay';
    let tranStr = '';

    var bool = function(char) {
      return (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'y');
    }

    if (bool(str[0])) {
      tranStr = str + suffix;
    }
    else {
      var firstChar = str.slice(0, 1);

      tranStr = str.slice(1) + firstChar + suffix;
    }

    return tranStr;
  }
}
