import { Request, Response, NextFunction } from 'express'
import { get } from './decorators/routers'
import { controller } from './decorators/controllers'
import { use } from './decorators/use'
// this should work but the index.ts file is not doing what I think it should do.
// import { get, controller } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!')
  next()
}

@controller('/auth')
class LoginController {

  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email">
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password">
        </div>
        <button>Submit</button>
      </form>
    `)
  }
}

