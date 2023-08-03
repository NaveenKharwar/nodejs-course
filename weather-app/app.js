const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
	console.log('Please provide an address')
} else {
	geocode (address, (error, data) => {
		if (error) {
			return console.log(error)
		}

		const {latitude,longitude, location } = data
		forcast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return console.log(error)
			}

			console.log(location)
			console.log(forecastData)
		})
	})
}

