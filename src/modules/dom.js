import * as util from "./utilities";

// Module for adding weather data to the DOM!
function updateCurrentWeatherDOM(weatherData) {

    let location_header = document.getElementById("location_header");
    location_header.textContent = weatherData.location;

    let weather_overview = document.getElementById("weather_overview");
    weather_overview.textContent = weatherData.current_weather;

    let weather_icon = document.getElementById("weather_icon");
    weather_icon.src = `http://openweathermap.org/img/wn/${weatherData.current_weather_icon_code}@2x.png`

    let summary_temp = document.getElementById("summary_temp");
    summary_temp.textContent = weatherData.current_temp;

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

function updateDateTimeDOM(dateTime) {
    console.log(dateTime);
    let current_date = document.getElementById("current_date");
    current_date.textContent = dateTime.month_day_year;

    let current_time = document.getElementById("current_time");
    current_time.textContent = dateTime.local_time;
}



function updateForecastDOM(forecastData) {

    // Populate middle section -> Hourly forecast (12 hours) as updeteForecastDOM

    // T + 1 hour.
    let hour_1 = document.getElementById("hour_1");
    hour_1.textContent = util.unixToDate(forecastData.hourly[1].dt).local_time;
    let hourly_temp_1 = document.getElementById("hourly_temp_1");
    hourly_temp_1.textContent = Math.round(forecastData.hourly[0].temp);
    let hourly_icon_1 = document.getElementById("hourly_icon_1");
     hourly_icon_1.src = `http://openweathermap.org/img/wn/${forecastData.hourly[0].weather[0].icon}@2x.png`;

    //  T + 2 hours.
    let hour_2 = document.getElementById("hour_2");
    hour_2.textContent = util.unixToDate(forecastData.hourly[2].dt).local_time;
    let hourly_temp_2 = document.getElementById("hourly_temp_2");
    hourly_temp_2.textContent = Math.round(forecastData.hourly[1].temp);
    let hourly_icon_2 = document.getElementById("hourly_icon_2");
     hourly_icon_2.src = `http://openweathermap.org/img/wn/${forecastData.hourly[1].weather[0].icon}@2x.png`;

    //  T + 3 hours.
    let hour_3 = document.getElementById("hour_3");
    hour_3.textContent = util.unixToDate(forecastData.hourly[3].dt).local_time;
    let hourly_temp_3 = document.getElementById("hourly_temp_3");
    hourly_temp_3.textContent = Math.round(forecastData.hourly[2].temp);
    let hourly_icon_3 = document.getElementById("hourly_icon_3");
    hourly_icon_3.src = `http://openweathermap.org/img/wn/${forecastData.hourly[2].weather[0].icon}@2x.png`;

    //  T + 4 hours.
    let hour_4 = document.getElementById("hour_4");
    hour_4.textContent = util.unixToDate(forecastData.hourly[4].dt).local_time;
    let hourly_temp_4 = document.getElementById("hourly_temp_4");
    hourly_temp_4.textContent = Math.round(forecastData.hourly[3].temp);
    let hourly_icon_4 = document.getElementById("hourly_icon_4");
    hourly_icon_4.src = `http://openweathermap.org/img/wn/${forecastData.hourly[3].weather[0].icon}@2x.png`;

    //  T + 5 hours.
    let hour_5 = document.getElementById("hour_5");
    hour_5.textContent = util.unixToDate(forecastData.hourly[5].dt).local_time;
    let hourly_temp_5 = document.getElementById("hourly_temp_5");
    hourly_temp_5.textContent = Math.round(forecastData.hourly[4].temp);
    let hourly_icon_5 = document.getElementById("hourly_icon_5");
    hourly_icon_5.src = `http://openweathermap.org/img/wn/${forecastData.hourly[4].weather[0].icon}@2x.png`;

    //  T + 6 hours.
    let hour_6 = document.getElementById("hour_6");
    hour_6.textContent = util.unixToDate(forecastData.hourly[6].dt).local_time;
    let hourly_temp_6 = document.getElementById("hourly_temp_6");
    hourly_temp_6.textContent = Math.round(forecastData.hourly[5].temp);
    let hourly_icon_6 = document.getElementById("hourly_icon_6");
    hourly_icon_6.src = `http://openweathermap.org/img/wn/${forecastData.hourly[5].weather[0].icon}@2x.png`;

    //  T + 7 hours.
    let hour_7 = document.getElementById("hour_7");
    hour_7.textContent = util.unixToDate(forecastData.hourly[7].dt).local_time;
    let hourly_temp_7 = document.getElementById("hourly_temp_7");
    hourly_temp_7.textContent = Math.round(forecastData.hourly[6].temp);
    let hourly_icon_7 = document.getElementById("hourly_icon_7");
    hourly_icon_7.src = `http://openweathermap.org/img/wn/${forecastData.hourly[6].weather[0].icon}@2x.png`;

    //  T + 8 hours.
    let hour_8 = document.getElementById("hour_8");
    hour_8.textContent = util.unixToDate(forecastData.hourly[8].dt).local_time;
    let hourly_temp_8 = document.getElementById("hourly_temp_8");
    hourly_temp_8.textContent = Math.round(forecastData.hourly[7].temp);
    let hourly_icon_8 = document.getElementById("hourly_icon_8");
    hourly_icon_8.src = `http://openweathermap.org/img/wn/${forecastData.hourly[7].weather[0].icon}@2x.png`;

}
    


export { 
    updateCurrentWeatherDOM, 
    updateDateTimeDOM,
    updateForecastDOM
};