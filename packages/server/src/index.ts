import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import http from "http"
export const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

export const server = http.createServer(app)
app.get('/say-hello-world', (req: Request, res: Response) => res.send('Hello World!'))

