import * as util from "./utilities";
import errorDOM from "./dom";

// Functions to fetch and parse weather data.
async function fetchCurrentData(api_url) {
    
    try {
        const response = await fetch(api_url, {mode: 'cors'});
        if (!response.ok) {
            errorDOM();
            console.log(`Location isn't valid, try again!`);
        }
    
        const weatherData = parseCurrentData(await response.json());
        return weatherData;
    }

    catch(error) {
        console.log("Error: " + error);
    }
}


// Hourly and 7 day forecast API call.
async function fetchForecastData(api_url) {

    try {
        const response = await fetch(api_url, {mode: 'cors'});
        
        if (!response.ok) {
            console.log(`Invalid API call, for now...`);
        }

        const weatherData = await response.json();
        return weatherData;
    }

    catch(error) {
        console.log("Error: " + error);
    }
}


// parseCurrentData parses current weather data, and returns lat / long arguments to be used for forecast API call.
function parseCurrentData(response) {
    const weatherData = {
        "location": response.name + ", " + response.sys.country,
        "latitude": response.coord.lat,
        "longitude": response.coord.lon,
        "current_weather": response.weather[0].description,
        "current_weather_icon_code": response.weather[0].icon,
        "current_temp": Math.round(response.main.temp),
        "feels_like_temp": Math.round(response.main.feels_like),
        "high_temp": Math.round(response.main.temp_max),
        "low_temp": Math.round(response.main.temp_min),
        "humidity": Math.round(response.main.humidity) + "%",
        "wind_dir": util.degreesToCardinal(response.wind.deg) + ` (${response.wind.deg}°)`,
        "wind_speed": Math.round(response.wind.speed)
    }

    return weatherData;
}


export {
    fetchCurrentData,
    fetchForecastData
};