import { Router, Request, Response } from 'express'

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
})

export { router }