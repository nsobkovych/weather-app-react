import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="degree d-flex align-items-start justify-content-center justify-content-sm-start">
          <span id="w-degree" className="w-degree display-3 flex-sm-fill">
            {Math.round(props.celsius)}
          </span>
          <span className="unit-active">°C </span>
          <span className="divider"></span>
          <button
            type="button"
            className="btn btn-link btn-degree flex-sm-fill btn-fahrenheit"
            onClick={showFahrenheit}
          >
            °F
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="degree d-flex align-items-start justify-content-center justify-content-sm-start">
          <span id="w-degree" className="w-degree display-3 flex-sm-fill">
            {Math.round(fahrenheit())}
          </span>
          <button
            type="button"
            className="btn btn-link btn-degree flex-sm-fill btn-fahrenheit"
            onClick={showCelsius}
          >
            °C
          </button>
          <span className="divider"></span>
          <span className="unit-active">°F</span>
        </div>
      </div>
    );
  }
}
