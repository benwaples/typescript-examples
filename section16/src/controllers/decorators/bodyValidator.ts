import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

// middleware to check if there is body data on a request.

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key)
  }
}