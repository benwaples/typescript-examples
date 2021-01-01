
// generics class examples
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// instead of having an array for each value type, pass the type in as an argument "T"
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// hover over stringArr and see how TS figures out how this is now an array of strings, not of type T
const stringArr = new ArrayOfAnything<string>(['a', 'b'])

// TS is smart enough that you don't need to pass in the generics in this instance, it can just figure out that the constructor will now be using a string type;
const inference = new ArrayOfAnything(['a', 'b'])

// generics example functions

function printStrings(arr: string[]): void {
  for(let i =0; i < arr.length; i++) {
    console.log(arr[i])
  }
} 

function printNumbers(arr: number[]): void {
  for(let i =0; i < arr.length; i++) {
    console.log(arr[i])
  }
} 

function printAnything<T>(arr: T[]): void {
  for(let i =0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

const stringArray = ['a', 'b', 'c']
const numberArray = [1, 2, 3, 4]

// explicitly pass in the generics type 
// helps to pass in the parameters type via the generic because it'll help you catch errors
printAnything<string>(stringArray)

// or you can have TS infer what type T will be by the parameter being passed in.
printAnything(stringArray)

// Generic Constraints
class Car {
  _id: string;

  print() {
    console.log('I am a car')
  }
}

class House {
  id: string;

  print() {
    console.log('I am a house')
  }
}

// must add a constraint to the T in order to make sure that the parameter has a print method on it. 
// add an interface to the parameter to make sure it satisfies the interface
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for(let i =0; i < arr.length; i++) {
    arr[i].print();
  }
}

interface Printable {
  print(): void;
}

// a number array doesnt have a printable method on it so it errors.
printHousesOrCars([1,2,4,3])

// these objects will have a printable method on it so they are okay to pass.
printHousesOrCars([new House(), new House(), new Car()])

// however if you also pass a type through the generic, then the parameter must be of that type
// the id attribute on House is different than on Car.
printHousesOrCars<House>([new House(), new House(), new Car()])