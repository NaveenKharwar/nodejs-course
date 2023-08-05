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
			const weatherData = {
				description: body.current.weather_descriptions,
				temperature: body.current.temperature,
				feelslike: body.current.feelslike,
				humidity: body.current.humidity,
				wind_speed: body.current.wind_speed,
				humidity: body.current.humidity,
				weatherIcon: body.current.weather_icons[0]
			};
			callback(undefined, weatherData);
		}
	})
}

module.exports = forcast