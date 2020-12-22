// public - method can be called anytime and anywhere
// private - method can only be called by other methods in the class
// protected - method can be called by other methods in this class, or by other methods in child class.

// always capitalize the class name
class Vehicle {

  constructor(public color: string) {}
  
  // only child classes and this class can use this method
  protected honk(): void {
    console.log('HONK')
  }
}

// copy and paste Vehicle methods onto car. Think of React
class Car extends Vehicle {

  constructor(public wheels: number, public fast: boolean, color: string){
    super(color)
  }

  // can not override instance methods in child classes.
  // use private when you dont want other developers using a certain method
  private drive(): void {
    console.log('super fricken fast')
  }

  public startDrive(): void {
    this.drive();
    this.honk()
  }
}

const vehicle = new Vehicle('pink')
// note the automagical stuff
console.log(vehicle.color)

const car = new Car(2, false, 'orange')
car.startDrive()
console.log(car.color,'color')
console.log(car.wheels, 'wheels')
console.log(car.fast, 'fast')
