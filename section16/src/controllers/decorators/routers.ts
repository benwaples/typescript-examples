import 'reflect-metadata'

export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // make use of the metadata package
    Reflect.defineMetadata('path', path, target, key)
  }
}