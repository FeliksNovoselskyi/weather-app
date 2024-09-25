// ES-modules import
import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

dotenv.config({path: '../.env'})

const webApp = express()
const apiKey = process.env.API_KEY

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

// Taking __dirname from __filename
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

webApp.set('view engine', 'ejs')
webApp.set('views', './templates')

webApp.use('/static/', express.static(join(__dirname, 'static')))

webApp.get('/weather', async (req, res) => {
    const city = req.query.city

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    
    let weather
    let error = null

    try {
        const response = await axios.get(apiUrl)
        // console.log(response)
        weather = response.data

    } catch (error) {
        weather = null
        error = "Error, please try again"
    }

    res.render('index', {weather, error})
})

webApp.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`)
})
