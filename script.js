function getWeather() {
    const apiKey = "840c3e69c799b6a171f32ec63d4d122a";
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    const cityName = cityInput.value;

    if (cityName) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const city = data.name;
                const weather = data.weather[0].description;
                const temperature = Math.round(data.main.temp);
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const pressure = data.main.pressure;

                const weatherHTML = `
                    <h2>Weather in ${city}</h2>
                    <p><span>Present-weather :</span> ${weather}</p>
                    <p><span>Wind Speed :</span> ${windSpeed} m/s</p>
                    <p><span>Air-pressure :</span> ${pressure} hPa</p>
                    <p><span>Temperature :</span> ${temperature}°C</p>
                    <p><span>Humidity :</span> ${humidity}%</p>
                `;

                weatherInfo.innerHTML = weatherHTML;
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherInfo.innerHTML = "City not found or an error occurred. Please try again.";
            });
    } else {
        weatherInfo.innerHTML = "Please enter a city name.";
    }
}
