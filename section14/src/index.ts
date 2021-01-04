import express, { Request, Response } from 'express';
import { router } from './routes/loginRoute';

const app = express()

// Request and Response are classes that come along with the express app
//  so we can use them to define the the parameters for an express endpoint
app.get('/test', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi There</h1>
    </div>
  `)
})

app.use(router)

app.listen(3000, () => {
  console.log('Listening to port 3000')
})