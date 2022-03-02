import fetchWeatherData from "./modules/weather";
import updateDOM from "./modules/dom";

let button = document.getElementById("btn");
button.addEventListener("click", loadWeather);



async function loadWeather() {

    // Build URL.
    let key = "";
    let location = document.getElementById("location_input").value;
    let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${key}`;

    // Pass URL, receive weather data object!
    let weatherData = await fetchWeatherData(api_url);
    console.log(weatherData);
    updateDOM(weatherData);
}

// Initial function call to populate page upon loading.
loadWeather();