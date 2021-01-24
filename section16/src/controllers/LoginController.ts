import { Request, Response, NextFunction } from 'express'
import { get, post } from './decorators/routers'
import { controller } from './decorators/controllers'
import { bodyValidator } from './decorators/bodyValidator'
// this should work but the index.ts file is not doing what I think it should do.
// import { get, controller } from './decorators'

const user = {
  email: 'ben',
  password: 'ben'
}

@controller('/auth')
class LoginController {

  // this should error because its behaving like an endpoint and would leave our server hanging
  // uncomment the error that happens after updating PropertyDescriptor 
  // @get('/')
  // add(a: number, b: number): number {
  //   return a + b;
  // }

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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
  
    if(email && password && email === user.email && password === user.password) {
      req.session = { loggedIn: true };
      res.redirect('/')
    } else {
      res.send('Invalid username or password')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/')
  }
}

