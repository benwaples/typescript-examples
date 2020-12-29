class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  bubbleSort(): void {
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

const sorter =  new Sorter([ 12, 3, 5, 6, 23 ])
sorter.bubbleSort()
console.log(sorter.collection);