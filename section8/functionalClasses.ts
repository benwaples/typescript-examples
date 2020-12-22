// always capitalize the class name
class Vehicle {
  drive(): void {
    console.log('motor sounds')
  }
  honk(): void {
    console.log('HONK')
  }
}

// copy and paste Vehicle methods onto car. Think of React
class Car extends Vehicle {
  drive(): void {
    console.log('super fricken fast')
  }
}

const vehicle = new Vehicle()
// note the automagical stuff
vehicle.drive()
vehicle.honk()

const car = new Car()
car.drive()