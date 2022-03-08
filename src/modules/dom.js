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

    // Populate middle section -> Hourly forecast (12 hours).

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

    //  T + 9 hours.
    let hour_9 = document.getElementById("hour_9");
    hour_9.textContent = util.unixToDate(forecastData.hourly[9].dt).local_time;
    let hourly_temp_9 = document.getElementById("hourly_temp_9");
    hourly_temp_9.textContent = Math.round(forecastData.hourly[8].temp);
    let hourly_icon_9 = document.getElementById("hourly_icon_9");
    hourly_icon_9.src = `http://openweathermap.org/img/wn/${forecastData.hourly[8].weather[0].icon}@2x.png`;

    //  T + 10 hours.
    let hour_10 = document.getElementById("hour_10");
    hour_10.textContent = util.unixToDate(forecastData.hourly[10].dt).local_time;
    let hourly_temp_10 = document.getElementById("hourly_temp_10");
    hourly_temp_10.textContent = Math.round(forecastData.hourly[10].temp);
    let hourly_icon_10 = document.getElementById("hourly_icon_10");
    hourly_icon_10.src = `http://openweathermap.org/img/wn/${forecastData.hourly[9].weather[0].icon}@2x.png`;

    //  T + 11 hours.
    let hour_11 = document.getElementById("hour_11");
    hour_11.textContent = util.unixToDate(forecastData.hourly[11].dt).local_time;
    let hourly_temp_11 = document.getElementById("hourly_temp_11");
    hourly_temp_11.textContent = Math.round(forecastData.hourly[11].temp);
    let hourly_icon_11 = document.getElementById("hourly_icon_11");
    hourly_icon_11.src = `http://openweathermap.org/img/wn/${forecastData.hourly[10].weather[0].icon}@2x.png`;

    //  T + 12 hours.
    let hour_12 = document.getElementById("hour_12");
    hour_12.textContent = util.unixToDate(forecastData.hourly[12].dt).local_time;
    let hourly_temp_12 = document.getElementById("hourly_temp_12");
    hourly_temp_12.textContent = Math.round(forecastData.hourly[12].temp);
    let hourly_icon_12 = document.getElementById("hourly_icon_12");
    hourly_icon_12.src = `http://openweathermap.org/img/wn/${forecastData.hourly[11].weather[0].icon}@2x.png`;


    // Populate lower section -> Daily forecast (7 days).

    // Current day + 1.
    let day_1 = document.getElementById("day_1");
    day_1.textContent = util.unixToDate(forecastData.daily[1].dt).day_of_week;
    let day_temp_1 = document.getElementById("day_temp_1");
    day_temp_1.textContent = `${Math.round(forecastData.daily[1].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_1 = document.getElementById("day_icon_1");
    day_icon_1.src = `http://openweathermap.org/img/wn/${forecastData.daily[1].weather[0].icon}@2x.png`;

    // Current day + 2.
    let day_2 = document.getElementById("day_2");
    day_2.textContent = util.unixToDate(forecastData.daily[2].dt).day_of_week;
    let day_temp_2 = document.getElementById("day_temp_2");
    day_temp_2.textContent = `${Math.round(forecastData.daily[2].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_2 = document.getElementById("day_icon_2");
    day_icon_2.src = `http://openweathermap.org/img/wn/${forecastData.daily[2].weather[0].icon}@2x.png`;

    // Current day + 3.
    let day_3 = document.getElementById("day_3");
    day_3.textContent = util.unixToDate(forecastData.daily[3].dt).day_of_week;
    let day_temp_3 = document.getElementById("day_temp_3");
    day_temp_3.textContent = `${Math.round(forecastData.daily[3].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_3 = document.getElementById("day_icon_3");
    day_icon_3.src = `http://openweathermap.org/img/wn/${forecastData.daily[3].weather[0].icon}@2x.png`;

     // Current day + 4.
     let day_4 = document.getElementById("day_4");
     day_4.textContent = util.unixToDate(forecastData.daily[4].dt).day_of_week;
     let day_temp_4 = document.getElementById("day_temp_4");
     day_temp_4.textContent = `${Math.round(forecastData.daily[4].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
     let day_icon_4 = document.getElementById("day_icon_4");
     day_icon_4.src = `http://openweathermap.org/img/wn/${forecastData.daily[4].weather[0].icon}@2x.png`;

    // Current day + 5.
    let day_5 = document.getElementById("day_5");
    day_5.textContent = util.unixToDate(forecastData.daily[5].dt).day_of_week;
    let day_temp_5 = document.getElementById("day_temp_5");
    day_temp_5.textContent = `${Math.round(forecastData.daily[5].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_5 = document.getElementById("day_icon_5");
    day_icon_5.src = `http://openweathermap.org/img/wn/${forecastData.daily[5].weather[0].icon}@2x.png`;

    // Current day + 6.
    let day_6 = document.getElementById("day_6");
    day_6.textContent = util.unixToDate(forecastData.daily[6].dt).day_of_week;
    let day_temp_6 = document.getElementById("day_temp_6");
    day_temp_6.textContent = `${Math.round(forecastData.daily[6].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_6 = document.getElementById("day_icon_6");
    day_icon_6.src = `http://openweathermap.org/img/wn/${forecastData.daily[6].weather[0].icon}@2x.png`;

    // Current day + 7.
    let day_7 = document.getElementById("day_7");
    day_7.textContent = util.unixToDate(forecastData.daily[7].dt).day_of_week;
    let day_temp_7 = document.getElementById("day_temp_7");
    day_temp_7.textContent = `${Math.round(forecastData.daily[7].temp.min)} / ${Math.round(forecastData.daily[1].temp.max)}`;
    let day_icon_7 = document.getElementById("day_icon_7");
    day_icon_7.src = `http://openweathermap.org/img/wn/${forecastData.daily[7].weather[0].icon}@2x.png`;
}
    

export { 
    updateCurrentWeatherDOM, 
    updateDateTimeDOM,
    updateForecastDOM
};