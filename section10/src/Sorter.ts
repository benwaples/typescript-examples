import { NumberCollection } from "./NumberCollection";

// as long as something has these properties than it can be sorted
// TS will not check that these functions and return values are DOING what you want.
// for example, compare could receive 2 parameters, both being numbers, and then always return a fixed boolean
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // Sorter can receive an array of numbers or a string
  constructor(public collection: number[]| string) {
    this.collection = collection;
  }

  bubbleSortNumbers(): void {
    const { length } = this.collection;

    // implicitly say that this loop will only ever run if the collection is an array
    // this is called a type guard
    // this type guard will return true or false, takes an instance of a constructor. Think of new Array()
    if(this.collection instanceof Array) {
      // keep track of number of iterations of the array
      for (let i = 0; i < length; i ++) {
        // make sure that we exclude the previously largest number
        for (let j = 0; j < length - i - 1; j ++) {
          // if left is larger than right
          if (this.collection[j] > this.collection[j + 1]) {
            // swap the left and right
            const temp = this.collection[j]
            this.collection[j] = this.collection[j+1]
            this.collection[j+1] = temp
          }
        }
      }
    }
  }

  bubbleSortString(): void {

    // another type guard
    // type of will return a string of value type
    // only works for string, boolean, number
    if(typeof this.collection === 'string') {
      
    }
  }
}


// error because we will be extending the sorter2 class on all other classes that will have length, compare, and swap
// however THIS class doesn't have those yet.
// turn this into an abstract class to avoid errors
// abstract class notes below sorter2
export abstract class Sorter2 {
  // abstracting methods
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  // abstracting getters
  abstract length: number; /*/ treat it like a method /*/
  
  bubbleSortNumbers(): void {
  const { length } = this;

    // keep track of number of iterations of the array
    for (let i = 0; i < length; i ++) {
      // make sure that we exclude the previously largest number
      for (let j = 0; j < length - i - 1; j ++) {
        // if left is larger than right
        if (this.compare(j, j+1)) {
          // swap the left and right
          this.swap(j, j+1)
        }
      }
    }
  }
}

/*/ abstract class notes/*/
// cannot be used to create object directly
  // NOT ALLOWED: const abstractClass = new AbstractClass()

// only used as parent classes
  // can only be extended
  // can reference methods and attributes that dont yet exists
    // must provide names and types for those methods

