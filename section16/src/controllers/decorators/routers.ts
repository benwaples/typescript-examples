import 'reflect-metadata'
import { Methods } from './Methods'

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      // make use of the metadata package
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
// delete is a protected keyword in JS, so the delete method is actually del
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)

// works, but most of this is duplicated from the above function
export function badPostMethod(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // make use of the metadata package
    Reflect.defineMetadata('path', path, target, key)
    Reflect.defineMetadata('method', 'post', target, key)
  }
}