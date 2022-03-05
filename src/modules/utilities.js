// Module for datetime functions and unit conversion.

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

export {
    degreesToCardinal,
    toggleUnits
};