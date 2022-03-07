import * as weatherFunctions from "./modules/weather";
import * as domFunctions from "./modules/dom";
import * as util from "./modules/utilities";

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

    if (isMetric) {
        loadWeather(city, 0);
    } else { 
        loadWeather(city, 1);
    }

    util.toggleUnits(isMetric);
    isMetric = !isMetric;
});


async function loadWeather(city, unit_index) {

    // Build API URL.
    let key = "40117561b027d65aef26e6f9f3621abe";
    let units = ["imperial", "metric"];


    // Pass URLs, receive weather data objects, populate the DOM!
    let api_url_current = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units[unit_index]}&APPID=${key}`;
    let weatherData = await weatherFunctions.fetchCurrentData(api_url_current);
    let dateTimeData = util.unixToDate(weatherData.datetime);
    
    let api_url_forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.latitude}&lon=${weatherData.longitude}&units=${units[unit_index]}&appid=${key}`;
    let forecastData = await weatherFunctions.fetchForecastData(api_url_forecast);
    
    domFunctions.updateCurrentWeatherDOM(weatherData);
    domFunctions.updateDateTimeDOM(dateTimeData);
    domFunctions.updateForecastDOM(forecastData);
}


// Initial function call to populate page upon loading. Default load with imperial units.
loadWeather("Salt Lake City", 0);