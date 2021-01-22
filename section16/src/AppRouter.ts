import express from 'express'

// singleton - only one copy of a router at a time
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    // if router doesnt exist, make an instance of it
    if(!AppRouter.instance) {
      AppRouter.instance = express.Router()
    }
    // Once it does exist, return that instance;
    return AppRouter.instance;
  }
}