// Exercise: Triangle

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  isEquilateral() {
    return  (this.side1 != 0 || this.side2 != 0 || this.side3 != 0) && 
            (this.side1 === this.side2 && this.side2 === this.side3);
  }

  isIsosceles() {
    return  (this.side1 === this.side2) ||
            (this.side2 === this.side3) ||
            (this.side1 === this.side3);
  }

  isScalene() {
    return  (this.side1 <= (this.side2 + this.side3)) &&
            (this.side1 != this.side2 && this.side2 != this.side3);
  }
}
