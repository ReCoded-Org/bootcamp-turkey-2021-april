class Car {
  // Part 1. Constructor (REVIEW)
  constructor(color, fuelType) {
    this.color = color;
    this.fuelType = fuelType;
  }

  // Method.
  paint(newColor) {
    return this.color = newColor;
  }

  // Part 2. Static methods.
  hasTheSameProperties(car2){
    return this.color === car2.color &&
      this.fuelType === car2.fuelType
  }

  static hasTheSamePropertiesStatic(car1, car2) {
    return car1.color === car2.color &&
    car1.fuelType === car2.fuelType
  }


  // Part 3. Getter, setter.
  get speedKmH() {
    return this.speed
  }

  get speedInKmSec(){
    return this.speedKmH/3600
  }

  set speedKmH(newTopSpeedKmH) {
    if (newTopSpeedKmH > 300) {
      throw new Error ('Speed must be less than 300');
    } else {
    this.speed = newTopSpeedKmH
    }
  }

  get speedInMiles() {
    return this.speed * 0.621371
  }


  static compareSpeed(car1, car2) {
    if (car1.speed > car2.speed) {
      return car1
    } else {
      return car2
    }
  }
}

const audi = new Car("red","gas")
const tesla = new Car('red', "electric")

audi.paint('blue')

audi.speedKmH = 230
// we call getter without paranthies
console.log(audi.speedKmH)

console.log(audi.speedInKmSec)


console.log(audi.hasTheSameProperties(tesla))