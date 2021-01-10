class Boat {
  color: string= 'red';

  get formattedColor(): string {
    return `The color of this boat is ${this.color}`
  }

  // custom error message
  @logError('sunk that mf')
  pilot(): void {
    throw new Error();
    console.log('swish')
  }

}

// decorator gets run one time when the class is called
// function returning a decorator is called a decorator factory
// used to configure a decorator
function logError(errorMessage: string) { 
  return function (target: any, key: string, desc: PropertyDescriptor /* this allows us to change properties on classes*/): void {
    const method = desc.value;

    desc.value = function () {
      // when encountering any error, this error will run
      try {
        method();
      } catch(e) {
        console.log(errorMessage)
      }
    }
  }
}

// decorators are fancy syntax that will display a prototype and key. Key is the function below the decorator

// this is the same thing as using a decorator
// testDecorator(Boat.prototype, 'pilot')

new Boat().pilot()
