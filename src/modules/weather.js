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
        "current_temp": response.main.temp,
        "feels_like_temp": response.main.feels_like,
        "high_temp": response.main.temp_max,
        "low_temp": response.main.temp_min,
        "humidity": response.main.humidity
    }

    return weatherData;
}


export default fetchWeatherData;