import { Router, Request, Response } from 'express'

const router = Router();

const user = {
  email: '',
  password: ''
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
// a way to better type annotate express library
router.post('/login', (req: RequestWithBody, res: Response) => {
  // email is email because we gave the input a name of email. 
  // if you give it something else above, then you must give it a different name below
  const { email, password } = req.body;

  // this is called a type guard
  // only send if email is truthy.
  // poor error handling but manages if email or password are undefined
  if(email && password && email === user.email && password === user.password) {
    // then redirect to different route
  } else {
    res.send('Invalid username or password')
  }
})

export { router }