// public - method can be called anytime and anywhere
// private - method can only be called by other methods in the class
// protected - method can be called by other methods in this class, or by other methods in child class.

// always capitalize the class name
class Vehicle {
  
  // only child classes and this class can use this method
  protected honk(): void {
    console.log('HONK')
  }
}

// copy and paste Vehicle methods onto car. Think of React
class Car extends Vehicle {
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

const vehicle = new Vehicle()
// note the automagical stuff

const car = new Car()
car.startDrive()