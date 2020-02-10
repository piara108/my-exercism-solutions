// Exercise Name: Pangram

export const isPangram = (phrase = '') => {
  const templateString = 'abcdefghijklmnopqrstuvwxyz';

  if (phrase.length >= 26) {
    const sortedString = phrase.toLowerCase().split("").sort().join("");

    const scrubbedString = sortedString.replace(/[^a-zA-Z]+/, "");

    var uniqueCharString = Array.from(new Set(scrubbedString)).join("");

    if (uniqueCharString === templateString) return true;

    return false;
  }

  return false;
};