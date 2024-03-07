// Open weather api 
var apiKey = 'key';
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


  /*
// Fetch api zelda 
const zeldaResult = document.getElementById("zelda-output");


const getZeldaData = async () => {
  const response = await fetch('https://zelda.fanapis.com/api/games?limit=2');
  const myJson = await response.json();

  zeldaResult.innerHTML = `<p>Result: ${myJson} </p>`;
}
*/

