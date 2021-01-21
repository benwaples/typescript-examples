import express, { Request, Response } from 'express';
import { router } from './routes/loginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controllers'

import './controllers/LoginController'

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

// this allows us to access sessions on the req
app.use(cookieSession({ keys: [ 'SESSION'] }))
// this allows us to access the body on the req
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.use(controllerRouter)

app.listen(3000, () => {
  console.log('Listening to port 3000')
})