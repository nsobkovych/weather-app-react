import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
      icon: response.data.condition.icon,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "34317f7227tfoaf35280cf494d06abe3";
    let weatherApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(`${weatherApiUrl}`)
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
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (city.length !== 0) {
      search();
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row row-cols-1 mt-3">
          <div className="col col-lg-8 col-xxl-6">
            <div className="card w-wrapper">
              <div className="card-header py-4 bg-transparent w-search-section">
                <form
                  role="search"
                  name="search-city-form"
                  onSubmit={handleSubmit}
                >
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
                      onChange={updateCity}
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
              <WeatherForecast city={weatherData.city} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
