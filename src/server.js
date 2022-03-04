'use strict';
import express from 'express'
import helmet from "helmet"
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { generate, verifyToken } from './middleware/jwt';

const app = express()
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('common'))
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet());

app.get('/generate', (req, res) => { res.send(generate({ ticket: "1" })) })
app.get('/verify/:token', (req, res) => { res.send(verifyToken(req.params.token)) })

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`http://localhost:${server.address().port}`)
})

export default app