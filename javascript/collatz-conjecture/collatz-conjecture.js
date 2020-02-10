// Exercise: Collatz Conjecture

export const steps = (num) => {
  if (num <= 0) { throw new Error('Only positive numbers are allowed') }

  let count = 0;

  while(num != 1) {
    if (num % 2 != 0) { num = (3 * num) + 1 }
    else { num /= 2 }

    count++;
  }

  return count;
};
