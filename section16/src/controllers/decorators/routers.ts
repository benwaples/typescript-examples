import 'reflect-metadata'
import { Methods } from './Methods'
import { MetadataKeys } from './MetadataKeys'
import { RequestHandler } from 'express'

// this is saying that what ever gets passed into the routeBinder function (like the body) will have to have values that are of RequestHandler type
interface RouteHandlerDescriptor extends PropertyDescriptor {
  // limit the type of values that can be passed
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      // make use of the metadata package
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, method, target, key)
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