import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.dayWeather.main.temp_max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.dayWeather.main.temp_min);
    return `${temperature}°`;
  }

  function day() {
    let weekDay = Date(
      (props.dayWeather.dt - props.city.timezone) * 1000
    ).substring(0, 3);
    return weekDay;
  }

  return (
    <div className="WeatherForecastDay">
      <div class="WeatherForecast-day">{day()}</div>
      <div class="WeatherForecast-image">
        <WeatherIcon icon={props.dayWeather.weather[0].icon} size="32" />
      </div>
      <div class="WeatherForecast-temperature">
        <span class="WeatherForecast-temperature-max">{maxTemperature()}</span>
        <span class="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
