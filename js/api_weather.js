var apiKey = '974ce39d4617618fcffe9b89efde24d0';
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;


const outputElement = document.getElementById('weather-output');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;
    
    // Meer! 
    const feelsLike = data.main.feels_like;
    const currentTime = data.dt;

    outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}°C, but feels like: ${feelsLike}</p>
                               <p>Weather: ${description}</p>
                               <p>Current time: ${currentTime} (in freaking seconds!?)</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });