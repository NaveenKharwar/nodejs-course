// Elements
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherLocation = document.querySelector('#location');
const weatherTemperature = document.querySelector('#weather__result-temperature');
const weatherFeelsLike = document.querySelector('#weather__result-feelslike');
const weatherIcon = document.querySelector('#weather__icon');
const SearchedTerm = document.querySelector('#searched-term');
const weatherInput = document.querySelector('.weather__input');
const weatherResult = document.querySelector('.weather__result');
const spinnerContainer = document.querySelector('.weather__loading-container');
const spinnerContainerLoading = document.querySelector('.loading-spinner');
const weatherBackBtn = document.getElementById('weather__back-btn');
const description = document.getElementById('weather__result-description');
const windSpeed = document.getElementById('wind_speed');
const humidity = document.getElementById('humidity');

// Default image
const alterImage = '/img/alert-triangle.svg';

// Function to reset weather data
function resetWeatherData() {
  weatherLocation.textContent = '';
  weatherTemperature.textContent = '';
  description.textContent = '';
  weatherIcon.src = '';
  SearchedTerm.textContent = '';
  windSpeed.textContent = '';
  humidity.textContent = '';
  weatherInput.classList.add('overlay');
  spinnerContainer.classList.add('active');
  spinnerContainerLoading.classList.add('active');
}

// Show error message
function showError(error) {
  SearchedTerm.textContent = `Searched: ${search.value}`;
  weatherLocation.textContent = 'Not on Earth!';
  weatherIcon.src = alterImage;
  windSpeed.textContent = '—';
  humidity.textContent = '—';
  description.textContent = error;
  weatherInput.classList.remove('overlay');
  spinnerContainer.classList.remove('active');
  spinnerContainerLoading.classList.remove('active');
  weatherInput.style.left = '-100%';
  weatherResult.style.left = '0';
}

// Show weather data
function showWeatherData(data) {
  SearchedTerm.textContent = `Searched: ${data[0].address}`;
  weatherLocation.textContent = data[0].location;
  weatherTemperature.textContent = `${data[0].temperature} °C`;
  weatherFeelsLike.textContent = `Feels Like ${data[0].feelslike} °C`;
  description.textContent = `Today's condition will be ${data[0].forcast[0]}`;
  windSpeed.innerHTML = `${data[0].wind_speed} km/h <br> Wind Speed`;
  humidity.innerHTML = `${data[0].humidity}% <br> Humidity`;
  weatherIcon.src = data[0].weatherIcon;
  weatherInput.style.left = '-100%';
  weatherResult.style.left = '0';
  weatherInput.classList.remove('overlay');
  spinnerContainer.classList.remove('active');
  spinnerContainerLoading.classList.remove('active');
}

// Form submission event listener
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  resetWeatherData();

  const location = search.value;

  fetch(`/weather?address=${location}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => data.error ? showError(data.error) : showWeatherData(data))
    .catch(() => showError('An error occurred while fetching weather data.'));
});

// Back button event listener
weatherBackBtn.addEventListener('click', () => {
  weatherInput.style.left = '0';
  weatherResult.style.left = '100%';
});
