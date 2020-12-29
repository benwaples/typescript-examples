import { Sorter2 } from "./Sorter";

export class CharacterCollection extends Sorter2{
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const lowercase = this.data.toLocaleLowerCase()
    return lowercase[leftIndex] > lowercase[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    // make array
    const characters = this.data.split('');

    // swap anything that needs to be swapped
    const temp = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = temp;
    
    // return array back to a string
    this.data = characters.join('')
  }
}