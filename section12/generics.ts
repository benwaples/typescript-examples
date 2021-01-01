
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
printAnything<string>(stringArray)

// or you can have TS infer what type T will be by the parameter being passed in.
printAnything(stringArray)
