import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      mainDescription: response.data.weather[0].main,
      description: response.data.weather[0].description,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/01d@2x.png`,
      coords: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row row-cols-1 mt-3">
          <div className="col col-lg-8 col-xxl-6">
            <div className="card w-wrapper">
              <div className="card-header py-4 bg-transparent w-search-section">
                <form role="search" name="search-city-form">
                  <div className="input-group">
                    <input
                      type="search"
                      id="q"
                      name="q"
                      className="form-control"
                      placeholder="What is your city"
                      aria-label="What is your city"
                      aria-describedby="search-btn"
                      autoComplete="off"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="submit"
                      name="search-btn"
                      id="search-btn"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <WeatherInfo data={weatherData} />
              <div className="card-footer w-forecast text-center py-4 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ca7191e7c223ac438b06699f46c25b5";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric`;

    axios
    .get(`${weatherApiUrl}&appid=${apiKey}`)
    .then(handleResponse)
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

    return "Loading..."
  }
}
