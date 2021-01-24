import { Request, Response, NextFunction } from 'express';
import { controller } from './decorators/controllers'
import { get } from './decorators/routers'
import { use } from './decorators/use'

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if(req.session && req.session.loggedIn) {
    // tells other engineers that you arent returning anything, like the function says
    next();
    return;
  } 

  res.status(403)
  res.send('Not Permitted')
}

@controller('')
class RootController {

  @get('/')
  getRoot(req: Request, res: Response) {
    // type guarded because session.loggedIn can be undefined
    if(req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <h1> You are logged in </h1>
          <a href="/logout">Logout</a>
        </div>
      `)
    } else {
      res.send(`
        <div>
          <h1> You are not logged in </h1>
          <a href="/login">Log in</a>
        </div>
      `)
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('welcome to protected route, logged in user')
  }
}