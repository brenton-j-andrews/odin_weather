// Functions to fetch and parse weather data.
async function fetchWeatherData(api_url) {
    
    try {
        const response = await fetch(api_url, {mode: 'cors'});
        if (!response.ok) {
            console.log(`City ${location} isn't valid, try again!`);
        }
        const weatherData = parseWeatherData(await response.json());
        return weatherData;
    }

    catch(error) {
        console.log("Error: " + error);
    }
}

function parseWeatherData(response) {
    console.log(response);
    const weatherData = {
        "location": response.name + ", " + response.sys.country,
        "current_weather": response.weather[0].description,
        "current_weather_icon_code": response.weather[0].icon,
        "current_temp": Math.round(response.main.temp),
        "feels_like_temp": Math.round(response.main.feels_like),
        "high_temp": Math.round(response.main.temp_max),
        "low_temp": Math.round(response.main.temp_min),
        "humidity": Math.round(response.main.humidity) + "%",
        "wind_dir": degreesToCardinal(response.wind.deg) + ` (${response.wind.deg}°)`,
        "wind_speed": Math.round(response.wind.speed)
    }

    return weatherData;
}

// Convert wind direction (in degrees) to cardinal points.
function degreesToCardinal(degrees) {
    let cardinal_directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
    let index = Math.floor((degrees / 360) * 8);
    return cardinal_directions[index];
}

export default fetchWeatherData;