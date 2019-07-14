const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        message: 'This is a help text.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Phila',
        forecast: '50 degree celsius'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})