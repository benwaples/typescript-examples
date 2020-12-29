export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const lowercase = this.data.toLocaleLowerCase()
    return this.data[leftIndex] > this.data[rightIndex]
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