import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(
      MetadataKeys.middleware,
      target, 
      key
      // if we havent stored any middlewares then we will return an empty array
    ) || [];

    middlewares.push(middleware);

    Reflect.defineMetadata(
      MetadataKeys.middleware, 
      [...middlewares, middleware], 
      target, 
      key
    );
  };
}
