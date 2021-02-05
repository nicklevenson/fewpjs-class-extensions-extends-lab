// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, e) => {
      return e + total 
    }, 0)
  }
}

class Triangle extends Polygon {

  get isValid() {
    let sides = this.sides
    if (sides.length === 3) {
      const side1 = sides[0]
      const side2 = sides[1]
      const side3 = sides[2]
      (side1+side2 > side3) && (side1+side3 > side2) && (side3+side2 > side1) ? true : false
    }else{
      return false
    }
  }
}