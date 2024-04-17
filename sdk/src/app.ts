import express, { Request, Response } from 'express';

import { moviesRouter } from './routes/movies';
import { corsMiddleware } from './middlewares/cors';

const app = express()

app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use(corsMiddleware())

//Routes
app.use('/movies', moviesRouter)

app.use('/', (req: Request, res: Response) => {
    res.status(404).send('<div><h1>It works</h1><p>use <i>s=movieTitle</i> as query string to get results</p></div>')
})

app.use((req: Request, res: Response) => {
    res.status(404).send('<h1>404</h1>')
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
})
