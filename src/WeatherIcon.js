import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "shower-rain-day": "RAIN",
    "rain-day": "RAIN",
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW",
    "mist-day": "FOG",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-night": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-night": "SNOW",
    "mist-night": "FOG",
  };

  return (
    <div class="WeatherIcon">
      <div className="w-image">
        <ReactAnimatedWeather
          icon={iconMapping[props.icon]}
          color="#fff"
          size={props.size}
          animate={true}
        />
      </div>
    </div>
  );
}
