//Partners Deniz and Yeşim
class Car {
  // Part 1. Constructor (REVIEW)
  constructor(name, color, fuelType) {
    this.name = name;
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

  static compareSpeed (car1, car2){
    if (car1.speed> car2.speed) {
      return car1;
      } else return car2;
  }
  // Part 3. Getter, setter.
  get speedKmH() {
    return this.speed
  }

  set speedKmH(newTopSpeedKmH) {
    if (newTopSpeedKmH > 300) {
      throw Error("Slow down, Tiger!")

    } else{ 
    this.speed = newTopSpeedKmH
    }
  }

  get speedInMiles() {
    return this.speed * 0.621371
  }

  get speedInKmSec() {
    return this.speed / 3600 + " kmSec"
  }

}



const audi = new Car("audi","red","gas")
const tesla = new Car("tesla",'red', "electric")

audi.paint('blue')

// audi.speedKmH = 220
tesla.speedKmH = 350

// we call getter without paranthies

// console.log(audi.hasTheSameProperties(tesla))