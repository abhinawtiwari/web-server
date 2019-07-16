const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Abhinaw Tiwari'        
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Abhinaw Tiwari'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a help text.',
        title: 'Help',
        name: 'Abhinaw Tiwari'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Phila',
        forecast: '50 degree celsius'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        title: 'Help',
        name: 'Abhinaw TIwari'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found',
        title: '404',
        name: 'Abhinaw Tiwari'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})