import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const apiKey = "5ca7191e7c223ac438b06699f46c25b5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  function displayForecast(data) {
    console.log("data", data);
  }

// function displayForecast(data) {
//   function extractCurrentDate(listItem) {
//     return listItem.dt_txt.split(" ", 1)[0];
//   }

//   function extractTime(listItem) {
//     return listItem.dt_txt.split(" ")[1].split(":", 1)[0];
//   }

//   forecastDays[0] = {
//     weekDay: Date((data.list[0].dt - data.city.timezone) * 1000).substring(
//       0,
//       3
//     ),
//     icon: data.list[0].weather[0].icon,
//     description: data.list[0].weather[0].main,
//     maxTemp: data.list[0].main.temp_max,
//     minTemp: data.list[0].main.temp_min,
//     samplesCounter: 0,
//   };

//   let currentDate = extractCurrentDate(data.list[0]);
//   let index = 0;

//   data.list.forEach((forecastData) => {
//     if (extractTime(forecastData) == "12") {
//       forecastDays[index].icon = forecastData.weather[0].icon;
//     }

//     if (currentDate == extractCurrentDate(forecastData)) {
//       forecastDays[index].samplesCounter++;

//       if (forecastDays[index].maxTemp < forecastData.main.temp_max) {
//         forecastDays[index].maxTemp = forecastData.main.temp_max;
//       }
//       if (forecastDays[index].minTemp > forecastData.main.temp_min) {
//         forecastDays[index].minTemp = forecastData.main.temp_min;
//       }
//     } else {
//       let date = new Date((forecastData.dt - data.city.timezone) * 1000);

//       currentDate = extractCurrentDate(forecastData);
//       index++;

//       forecastDays[index] = {
//         weekDay: date.toString().substring(0, 3),
//         icon: forecastData.weather[0].icon,
//         description: forecastData.weather[0].main,
//         maxTemp: forecastData.main.temp_max,
//         minTemp: forecastData.main.temp_min,
//         samplesCounter: 1,
//       };
//     }
//   });

//   renderForecast();
// }

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
