// Module for adding weather data to the DOM!
function updateCurrentWeatherDOM(weatherData) {
    let location_header = document.getElementById("location_header");
    location_header.textContent = weatherData.location;

    let weather_overview = document.getElementById("weather_overview");
    weather_overview.textContent = weatherData.current_weather;

    let weather_icon = document.getElementById("weather_icon");
    weather_icon.src = `http://openweathermap.org/img/wn/${weatherData.current_weather_icon_code}@2x.png`

    let current_temp = document.getElementById("current_temp");
    current_temp.textContent =  weatherData.current_temp;

    let high_temp = document.getElementById("high_temp")
    high_temp.textContent = weatherData.high_temp;

    let low_temp = document.getElementById("low_temp")
    low_temp.textContent = weatherData.low_temp;

    let humidity = document.getElementById("humidity");
    humidity.textContent = weatherData.humidity;

    let wind_data = document.getElementById("wind_data")
    wind_data.textContent = `${weatherData.wind_dir} at ${weatherData.wind_speed}`
}


function updateForecastDOM(forecastData) {
    console.log(forecastData.hourly[0]);
    // Populate middle section -> Hourly forecast (12 hours). as updeteForecastDOM

    // T + 1 hour.
    let hourly_temp_1 = document.getElementById("hourly_temp_1");
    hourly_temp_1.textContent = Math.round(forecastData.hourly[0].temp);
    let hourly_icon_1 = document.getElementById("hourly_icon_1");
     hourly_icon_1.src = `http://openweathermap.org/img/wn/${forecastData.hourly[0].weather[0].icon}@2x.png`;

    //  T + 2 hours.
    let hourly_temp_2 = document.getElementById("hourly_temp_2");
    hourly_temp_2.textContent = Math.round(forecastData.hourly[1].temp);
    let hourly_icon_2 = document.getElementById("hourly_icon_2");
     hourly_icon_2.src = `http://openweathermap.org/img/wn/${forecastData.hourly[1].weather[0].icon}@2x.png`;

    //  T + 3 hours.
    let hourly_temp_3 = document.getElementById("hourly_temp_3");
    hourly_temp_3.textContent = Math.round(forecastData.hourly[2].temp);
    let hourly_icon_3 = document.getElementById("hourly_icon_3");
    hourly_icon_3.src = `http://openweathermap.org/img/wn/${forecastData.hourly[2].weather[0].icon}@2x.png`;

    //  T + 4 hours.
    let hourly_temp_4 = document.getElementById("hourly_temp_4");
    hourly_temp_4.textContent = Math.round(forecastData.hourly[3].temp);
    let hourly_icon_4 = document.getElementById("hourly_icon_4");
    hourly_icon_4.src = `http://openweathermap.org/img/wn/${forecastData.hourly[3].weather[0].icon}@2x.png`;

    //  T + 5 hours.
    let hourly_temp_5 = document.getElementById("hourly_temp_5");
    hourly_temp_5.textContent = Math.round(forecastData.hourly[4].temp);
    let hourly_icon_5 = document.getElementById("hourly_icon_5");
    hourly_icon_5.src = `http://openweathermap.org/img/wn/${forecastData.hourly[4].weather[0].icon}@2x.png`;

    //  T + 6 hours.
    let hourly_temp_6 = document.getElementById("hourly_temp_6");
    hourly_temp_6.textContent = Math.round(forecastData.hourly[5].temp);
    let hourly_icon_6 = document.getElementById("hourly_icon_6");
    hourly_icon_6.src = `http://openweathermap.org/img/wn/${forecastData.hourly[5].weather[0].icon}@2x.png`;

    //  T + 7 hours.
    let hourly_temp_7= document.getElementById("hourly_temp_7");
    hourly_temp_7.textContent = Math.round(forecastData.hourly[6].temp);
    let hourly_icon_7 = document.getElementById("hourly_icon_7");
    hourly_icon_7.src = `http://openweathermap.org/img/wn/${forecastData.hourly[7].weather[0].icon}@2x.png`;

}
    


function toggleUnits(isMetric) {
    let weather_data = document.querySelectorAll(".weather_data");
    let toggle_units_btn = document.getElementById("toggle_units_btn");
    weather_data.forEach(entry => {
        if (!isMetric) {
            entry.classList.add("metric");
            toggle_units_btn.textContent = "Display Fahrenheit";

        } else {
            entry.classList.remove("metric");
            toggle_units_btn.textContent = "Display Celcius";
        }
    })
}

export { 
    updateCurrentWeatherDOM, 
    updateForecastDOM,
    toggleUnits
};