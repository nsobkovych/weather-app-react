import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.dayWeather.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.dayWeather.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let date = new Date((props.dayWeather.time) * 1000);
    let weekDay = date.getDay();

    return weekDays[weekDay];
  }

  return (
    <div className="WeatherForecastDay">
      <div class="WeatherForecast-day">{day()}</div>
      <div class="WeatherForecast-image">
        <WeatherIcon icon={props.dayWeather.condition.icon} size={36} />
      </div>
      <div class="WeatherForecast-temperature">
        <span class="WeatherForecast-temperature-max">{maxTemperature()}</span>
        <span class="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
