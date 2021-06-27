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

  static compareSpeed(car1, car2) {
   if (car1.speed > car2.speed){
     return car1
   } else {
     return car2
   }
  }


  // Part 3. Getter, setter.
  get speedKmH() {
    return this.speed
  }
      
  set speedKmH(newTopSpeedKmH) {
    if (newTopSpeedKmH>300){
      console.log("error")
    }else{
      this.speed = newTopSpeedKmH
      return console.log(this.speed)
    }
  }

  get speedInKmSec() {
    return this.speed /3600;
  }
 
}

const audi = new Car("red","gas")
const tesla = new Car('red', "electric")

audi.paint('blue')

audi.speedKmH = 200
tesla.speedKmH = 300
// we call getter without paranthies
// console.log(audi.speedKmH)


console.log(Car.compareSpeed(audi,tesla))
console.log(audi.speedInKmSec)

