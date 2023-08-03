require("dotenv").config()
const request = require('postman-request')

const forcast = (latitude, longitude, callback) => {
	const WEATHERSTACK_API= process.env.WEATHERSTACK_API
	const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API}&query=${latitude},${longitude}`;

	request({url, json: true}, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service', undefined)
		} else if (body.error) {
			callback('Location not found or invalid API response', undefined)
		} else {
			callback (undefined, `${body.current.weather_descriptions[0]}. It is currenlty ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`)
		}
	})
}

module.exports = forcast