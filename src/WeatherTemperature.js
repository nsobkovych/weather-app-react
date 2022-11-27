import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="degree d-flex align-items-start justify-content-center justify-content-sm-start">
        <span id="w-degree" className="w-degree display-3">
          {Math.round(props.celsius)}
        </span>
        <span className="unit-active">°C </span>
      </div>
    </div>
  );
}
