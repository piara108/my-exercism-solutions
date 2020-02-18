// Armstrong Numbers

export const isArmstrongNumber = (number) => {
  const numberArray = number.toString().split('');
  const numberLength = numberArray.length;
  let sum = 0;

  numberArray.forEach(num => { sum += Math.pow(num, numberLength) });

  return (sum === number);
};
