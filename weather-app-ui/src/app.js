const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to servce
app.use(express.static(publicDirectoryPath))

app.get ('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Naveen Kharwar'
	})
})

app.get ('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Naveen Kharwar'
	})
})

app.get ('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		message: 'Hello! how may I help you today?',
		name: 'Naveen Kharwar'
	})
})

app.get( '/weather', (req, res) => {
	if(!req.query.address) {
		return res.send({
			error: 'You must provide an address'
		})
	}

	geocode (req.query.address, (error, {latitude,longitude, location } = {}) => {
		if (error) {
			return res.send({ error})
		}

		forcast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return res.send({ error })
			}

			res.send([{
				forcast: forecastData,
				location,
				address: req.query.address
			}])
		})
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'No Help article found',
		name: 'Naveen Kharwar'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'My 404 Page',
		name: 'Naveen Kharwar'
	})
})

app.listen( port, () => {
	console.log('App is running!', port)
})
