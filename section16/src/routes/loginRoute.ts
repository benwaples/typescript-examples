import { Router, Request, Response, NextFunction } from 'express'

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if(req.session && req.session.loggedIn) {
    // tells other engineers that you arent returning anything, like the function says
    next();
    return;
  } 

  res.status(403)
  res.send('Not Permitted')
}

const router = Router();

const user = {
  email: 'ben',
  password: 'ben'
}

// syntax for saying we are going to get a list of keys that are strings that hold strings
interface RequestWithBody extends Request{ 
  body: {
    [key: string]: string | undefined
  }
}

// LFG ssr
router.get('/login', (req: Request, res: Response) => {
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
})

// here we are using the new interface we just made.
router.post('/login', (req: RequestWithBody, res: Response) => {
  // email is email because we gave the input a name of email. 
  // if you give it something else above, then you must give it a different name below
  const { email, password } = req.body;

  // this is called a type guard
  // poor error handling but manages if email or password are undefined
  if(email && password && email === user.email && password === user.password) {
    // then redirect to different route
    req.session = { loggedIn: true };
    res.redirect('/')
  } else {
    res.send('Invalid username or password')
  }
});

router.get('/', (req: Request, res: Response) => {
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
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/')
})

// implementing auth middleware
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected route, logged in user')
})

export { router }