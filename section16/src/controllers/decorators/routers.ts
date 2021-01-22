import 'reflect-metadata'

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      // make use of the metadata package
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = routeBinder('get')
export const post = routeBinder('post')
export const put = routeBinder('put')
// delete is a protected keyword in JS, so the delete method is actually del
export const del = routeBinder('del')
export const patch = routeBinder('patch')

// works, but most of this is duplicated from the above function
export function badPostMethod(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // make use of the metadata package
    Reflect.defineMetadata('path', path, target, key)
    Reflect.defineMetadata('method', 'post', target, key)
  }
}