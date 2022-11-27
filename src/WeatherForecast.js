import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(data) {
    setForecast(data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div class="card-footer WeatherForecast-inner py-4 bg-transparent">
          <div class="row">
            <div class="col">
              <WeatherForecastDay
                dayWeather={forecast.list[0]}
                city={forecast.city}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ca7191e7c223ac438b06699f46c25b5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios
      .get(forecastApiUrl)
      .then(function (response) {
        displayForecast(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response);
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          alert(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        // console.log(error.config);
      });

    return null;
  }
}
