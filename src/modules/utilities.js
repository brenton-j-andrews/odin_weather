// Module for datetime functions and unit conversion.
import { format } from 'date-fns';
import toDate from 'date-fns/fromUnixTime';


// Convert wind direction (in degrees) to cardinal points.
function degreesToCardinal(degrees) {
    let cardinal_directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
    let index = Math.floor((degrees / 360) * 8);
    return cardinal_directions[index];
}


//  Toggle units function. Imperial <=> metric.
function toggleUnits(isMetric) {
    let weather_data = document.querySelectorAll(".weather_data");
    let toggle_units_btn = document.getElementById("toggle_units_btn");
    weather_data.forEach(entry => {
        if (!isMetric) {
            entry.classList.add("metric");
            toggle_units_btn.textContent = "Display Fahrenheit";

        } else {
            entry.classList.remove("metric");
            toggle_units_btn.textContent = "Display Celcius";
        }
    })
}


// unixToDate converts utc Datetime to date format, which is parsed and returned as an object.
function unixToDate(unixDt) {
    console.log(unixDt);
    const date = toDate(unixDt);

    console.log(date);
    const formatted_date = format(date, "iiii, MMMM do yyyy");
    console.log(formatted_date);

    const local_time = format(date, "HH:mm");

    const date_information = {
        "month_day_year": formatted_date,
        "local_time": local_time
    }

    return date_information;
}


export {
    degreesToCardinal,
    toggleUnits,
    unixToDate
};