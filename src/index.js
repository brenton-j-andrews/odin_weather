import fetchWeatherData from "./modules/weather";
import * as domFunctions from "./modules/dom";

// Default settings.
let default_location = true;
let isMetric = false;


let search_button = document.getElementById("search_btn");
search_button.addEventListener("click", loadWeather);

let toggle_units_button = document.getElementById("toggle_units_btn");
toggle_units_button.addEventListener("click", function() {
    domFunctions.toggleUnits(isMetric);
    isMetric = !isMetric;
});


async function loadWeather() {

    // Build API URL.
    let location;
    if (default_location) {
        location = "Salt Lake City";
        default_location = false;
    } 
    
    else location = document.getElementById("location_input").value;

    let key = "40117561b027d65aef26e6f9f3621abe";
    let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${key}`;

    // Pass URL, receive weather data object!
    let weatherData = await fetchWeatherData(api_url);
    console.log(weatherData);
    domFunctions.updateDOM(weatherData);
}

// Initial function call to populate page upon loading.
loadWeather();