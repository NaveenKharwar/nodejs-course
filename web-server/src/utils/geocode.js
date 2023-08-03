require("dotenv").config()
const request = require("postman-request");

const geocode = (address, callback) => {

const TOMTOM_API= process.env.TOMTOM_API
const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?&limit=3&key=${TOMTOM_API}`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to the location service", undefined);
		} else if (body.results.length === 0) {
			callback("Location not found or invalid API response", undefined);
		} else {
			callback(undefined, {
				latitude: body.results[0].position.lat,
				longitude: body.results[0].position.lon,
				location: body.results[0].address.freeformAddress,
			});
		}
	});
};

module.exports = geocode;
