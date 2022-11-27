import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function displayForecast(data) {
    setForecast(data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div class="card-footer WeatherForecast-inner py-4 bg-transparent">
          <div class="row">
            {forecast.map((dailyForecast, index) => {
              if (index < 5) {
                return (
                  <div class="col" key={index}>
                    <WeatherForecastDay
                      dayWeather={dailyForecast}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "34317f7227tfoaf35280cf494d06abe3";

    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

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
