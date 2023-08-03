const weatherForm =	document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messagetwo = document.querySelector('#message-two')


weatherForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const location = search.value

	messageOne.textContent = "Loading..."
	messagetwo.textContent = ""

	fetch(`/weather?address=${location}`)
	.then((response) => {
		response.json().then((data) => {
			if(data.error) {
				return messageOne.textContent = data.error;
			}

			messageOne.textContent = data[0].location;
			messagetwo.textContent = data[0].forcast;
		})
	})
})