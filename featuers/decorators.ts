class Boat {
  color: string= 'red';

  get formattedColor(): string {
    return `The color of this boat is ${this.color}`
  }

  @testDecorator
  pilot(): void {
    console.log('swish')
  }

}

// decorator gets run one time when the class is called
function testDecorator(target: any, key: string): void {
  console.log(`target: ${target}`)
  console.log(`key: ${key}`)
}