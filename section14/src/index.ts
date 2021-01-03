import express, { Request, Response } from 'express';

const app = express()

// Request and Response are classes that come along with the express app
//  so we can use them to define the the parameters for an express endpoint
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi There</h1>
    </div>
  `)
})

app.listen(3000, () => {
  console.log('Listening to port 3000')
})