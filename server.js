import express from 'express'

const webApp = express()

const PORT = 8000
const HOST = 'localhost'


webApp.get('/', (req, res) => {
    res.send('Hello, Sweater Weather!')
})

webApp.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`)
})
