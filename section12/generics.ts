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