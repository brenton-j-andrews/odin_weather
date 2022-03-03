import fetchWeatherData from "./modules/weather";
import * as domFunctions from "./modules/dom";

// Default settings.
let isMetric = false;


let search_button = document.getElementById("search_btn");
search_button.addEventListener("click", function() {
    let city = document.getElementById("location_input").value;
    loadWeather(city, 0);
});


let toggle_units_button = document.getElementById("toggle_units_btn");
toggle_units_button.addEventListener("click", function() {
    let city = document.getElementById("location_header").innerText;
    domFunctions.toggleUnits(isMetric);

    if (isMetric) {
        loadWeather(city, 0);
    } else { 
        loadWeather(city, 1);
    }

    isMetric = !isMetric;
});


async function loadWeather(city, unit_index) {

    // Build API URL.
    let key = "40117561b027d65aef26e6f9f3621abe";
    let units = ["imperial", "metric"];
    let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units[unit_index]}&APPID=${key}`;

    // Pass URL, receive weather data object!
    let weatherData = await fetchWeatherData(api_url);
    domFunctions.updateDOM(weatherData);
}

// Initial function call to populate page upon loading. Default load with imperial units.
loadWeather("Salt Lake City", 0);