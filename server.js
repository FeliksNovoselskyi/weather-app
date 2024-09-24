import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const webApp = express()

const PORT = process.env.PORT
const HOST = process.env.HOST


webApp.get('/', (req, res) => {
    res.send('Hello, Sweater Weather!')
})

webApp.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`)
})
