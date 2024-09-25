// ES-modules import
import express from 'express'
import dotenv from 'dotenv'

import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

dotenv.config({path: '../.env'})

const webApp = express()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

// Taking __dirname from __filename
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

webApp.set('view engine', 'ejs')
webApp.set('views', './templates')

webApp.use('/static/', express.static(join(__dirname, 'static')))

webApp.get('/', (req, res) => {
    res.render('index')
})

webApp.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`)
})
