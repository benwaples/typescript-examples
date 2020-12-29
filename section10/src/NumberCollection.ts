import { Sorter2 } from "./Sorter";

export class NumberCollection extends Sorter2 {

  constructor(public data: number[]) {
    super();
  }

  
  // when you add the get keyword, you do not have to call the function like a normal method
  // const collection = new NumberCollection()
  // collection.length
  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const t = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = t
  }
}

