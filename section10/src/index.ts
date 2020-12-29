class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  sort(): void {

  }
}

const sorter =  new Sorter([ 12, 3, 5, 6, 23 ])
sorter.sort()
console.log(sorter.collection);