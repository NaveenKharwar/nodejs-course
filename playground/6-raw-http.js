const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=e6dc73a9ecfca500034d705e71387046&query=40,-75&units=f`;

const request = http.request(url, (response) => {
	let data = ''

	response.on('data', (chunk) => {
		data = data + chunk.toString()
	})

	response.on('end', () => {
		const body = JSON.parse(data)
		console.log(body)
	})
})

request.on('error', (error) => {
	console.log('An Error', error)
})

request.end()