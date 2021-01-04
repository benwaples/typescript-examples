import { Router, Request, Response } from 'express'

const router = Router();

// syntax for saying we are going to get a list of keys that are strings that hold strings
interface BodyType { [key: string]: string | undefined}

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

router.post('/login', (req: Request, res: Response) => {
  // a way to better type annotate express library
  const { email, password }: BodyType = req.body;

  // only send if email is truthy.
  if(email) {
    res.send(email + password)
  }
})

export { router }