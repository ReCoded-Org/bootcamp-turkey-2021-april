// Add a static function compareSpeed that compares two cars and returns the object that is the faster car.
// Change the speed setter so that it throws an error if the caller tries to make it greater than 300km/h.
// Write a getter speedInKmSec that returns the speed in km/sec. It should use the speed in km/h.
 

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

  // static method
  static compareSpeed(car1,car2){
    if( car1.speedKmH > car2.speedKmH){
      return car1

    }else {
      return car2
    }
  }


  // Part 3. Getter, setter.
  get speedKmH() {
    return this.speed
  }

  set speedKmH(newTopSpeedKmH) {
    
    
    if (newTopSpeedKmH > 300){
     console.log ("slow down")
    }else {
      return this.speed = newTopSpeedKmH;
    }
  }

  get speedInMiles() {
    return this.speed * 0.621371
  }
  get speedInHours(){
    return this.speed / 3600
  }
}

const audi = new Car("red","gas")
const tesla = new Car('red', "electric")

audi.paint('blue')

audi.speedKmH = 200
tesla.speedKmH = 100

// we call getter without paranthies
console.log(audi.speedInHours)


//console.log(Car.compareSpeed(audi, tesla))


// console.log(audi.hasTheSameProperties(tesla))