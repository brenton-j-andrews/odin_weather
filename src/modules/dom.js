// Module for adding weather data to the DOM!

function updateDOM(weatherData) {
    let location_header = document.getElementById("location");
    location_header.textContent = weatherData.location;

    let weather_overview = document.getElementById("weather_overview");
    weather_overview.textContent = weatherData.current_weather;
}

export default updateDOM;