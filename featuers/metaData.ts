import 'reflect-metadata'

@controller
class Plane {
  color: string = 'red';

  @get('hi there')
  fly(): void {
    console.log('vrrr');
  }
}

// decorator factory that makes little secrets
function get(path: string) {
  
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
}
}

// typeof plane is a reference to the constructor method of the class Plane
function controller(target: typeof Plane) {
  for( let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    console.log(path);
    
    // when this controller is run with the target passed in, run the given route
    router.get(path, target.prototype[key])
  }
}

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