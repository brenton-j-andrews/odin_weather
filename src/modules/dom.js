// Module for adding weather data to the DOM!
function updateDOM(weatherData) {
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

function toggleUnits(isMetric) {
    let weather_data = document.querySelectorAll(".weather_data");
    let toggle_units_btn = document.getElementById("toggle_units_btn");
    weather_data.forEach(entry => {
        if (!isMetric) {
            entry.classList.add("metric");
            toggle_units_btn.textContent = "Display Farhenheit";

        } else {
            entry.classList.remove("metric");
            toggle_units_btn.textContent = "Display Celcius";
        }
    })
}

export { 
    updateDOM, 
    toggleUnits
};