import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="card-footer WeatherForecast-inner py-4 bg-transparent">
        <div class="row">
          <div class="col">
            <div class="WeatherForecast-day">Monday</div>
            <div class="WeatherForecast-image">
              <WeatherIcon icon="01d" size="32" />
            </div>
            <div class="WeatherForecast-temperature">
              <span class="WeatherForecast-temperature-max">20°</span>
              <span class="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
