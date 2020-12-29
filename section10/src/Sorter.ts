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

class Sorter2 {
  // Sorter can receive an array of numbers or a string
  constructor(public collection: /*/ TODO: type me out/*/) {
    this.collection = collection;
  }

  bubbleSortNumbers(): void {
  const { length } = this.collection;

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