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


  set speedKmH(newTopSpeedKmH) {
    //Question 2
    if(newTopSpeedKmH > 300){
      console.log("You're a fastest boi. You should calm down.")
    }
    else{
      this.speed = newTopSpeedKmH
    }
  }

  get speedInMiles() {
    return this.speed * 0.621371
  }


  //Question 1
  static compareSpeed(car1, car2){
    if(car1.speed < car2.speed){
      console.log(car2)
    }
    else{
      console.log(car1)
    }
  }
  
    
  //Question 3
  get speedInKmSec(){
    return this.speed / 3600
  }


}

const audi = new Car("red","gas")
const tesla = new Car('red', "electric")

audi.paint('blue')

audi.speedKmH = 330
tesla.speedKmH = 290
// we call getter without paranthies
console.log("Audi: ", audi)
console.log("Tesla: ", tesla)

console.log(tesla.speedInKmSec)

// console.log(audi.hasTheSameProperties(tesla))