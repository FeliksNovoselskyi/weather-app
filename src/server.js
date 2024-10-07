// ES6 import
import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

dotenv.config({path: '../.env'})

const app = express()
const apiKey = process.env.API_KEY

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use('/static/', express.static(join(__dirname, 'static')))

app.get('/', async (req, res) => {
    const city = req.query.city

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    
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


app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})
