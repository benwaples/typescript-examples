import { Request, Response, NextFunction } from 'express'
import { get } from './decorators/routers'
import { controller } from './decorators/controllers'
// this should work but the index.ts file is not doing what I think it should do.
// import { get, controller } from './decorators'


@controller('/auth')
class LoginController {

  @get('/login')
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

