// Difference of Squares

export class Squares {
  constructor(num) {
    this.num = num;
    this.sum = 0;
    this.sqr = 0;
  }

  get sumOfSquares() {
    for (var x = 1; x <= this.num; x++) {
      this.sum += Math.pow(x, 2);
    }

    return this.sum;
  }

  get squareOfSum() {
    for (let x = 1; x <= this.num; x++) {
      this.sqr += x;
    }

    return this.sqr *= this.sqr;
  }

  get difference() {
    return this.sqr - this.sum;
  }
}
