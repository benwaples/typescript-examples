import 'reflect-metadata'

class Plane {
  color: string = 'red';

  @markFunction('hi there')
  fly(): void {
    console.log('vrrr');
  }
}

// decorator factory that makes little secrets
function markFunction(secretInfo: string) {
  
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
}
}

// typeof plane is a reference to the constructor method of the class Plane
function printMetadata(target: typeof Plane)

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret)

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');


// // example of adding metadata to a key
// const note = Reflect.getMetadata('note', plane, 'color')

// console.log(note)

// example of adding metadata to an object using the Reflect package
// Reflect.defineMetadata('note', 'hi there', plane)
// Reflect.defineMetadata('height', 10, plane)


// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note)
// console.log(height)