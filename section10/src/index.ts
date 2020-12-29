class Sorter {
  // Sorter can receive an array of numbers or a string
  constructor(public collection: number[] | string) {
    this.collection = collection;
  }

  bubbleSortNumbers(): void {
    const { length } = this.collection;

    // implicitly say that this loop will only ever run if the collection is an array
    // this is called a type guard
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

    // logic will only ever work if the collection is a string
  }
}

const sorter =  new Sorter([ 12, 3, 5, 6, 23 ])
sorter.bubbleSortNumbers()
console.log(sorter.collection);