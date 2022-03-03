// Module for adding weather data to the DOM!
function updateDOM(weatherData) {
    let location_header = document.getElementById("location");
    location_header.textContent = weatherData.location;

    let weather_overview = document.getElementById("weather_overview");
    weather_overview.textContent = weatherData.current_weather;

    let weather_icon = document.getElementById("weather_icon");
    weather_icon.src = `http://openweathermap.org/img/wn/${weatherData.current_weather_icon_code}@2x.png`

    let current_temp = document.getElementById("current_temp");
    current_temp.textContent =  weatherData.current_temp;

    let high_temp = document.getElementById("high_temp")
    high_temp.textContent = "It could get up to " + weatherData.high_temp;

    let low_temp = document.getElementById("low_temp")
    low_temp.textContent = "And as low as " + weatherData.low_temp;

    let humidity = document.getElementById("humidity");
    humidity.textContent = "Humidity: " + weatherData.humidity;

    let wind_data = document.getElementById("wind_data")
    wind_data.textContent = `Wind: ${weatherData.wind_dir} at ${weatherData.wind_speed} mph`
}

function toggleUnits(isMetric) {
    let weather_data = document.querySelectorAll(".current_weather_container");
    weather_data.forEach(entry => {
        if (!isMetric) {
            entry.classList.add("metric");
        } else {
            entry.classList.remove("metric");
        }
    })
}

export { 
    updateDOM, 
    toggleUnits
};