import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { WiStrongWind, WiCloud, WiRaindrop } from "react-icons/wi";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card-body text-center">
        <div className="row row-cols-1 row-cols-sm-2 align-items-end">
          <div className="col text-sm-start mb-3 mb-sm-0">
            <h1 className="city">
              {props.data.city}, {props.data.country}
            </h1>
            <FormattedDate date={props.data.date} />
          </div>
          <div className="col my-3 my-sm-0">
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col align-self-end text-sm-end mb-3 mb-sm-0">
                <WeatherIcon
                  icon={props.data.icon}
                  alt={props.data.mainDescription}
                />
              </div>
              <div className="col text-sm-start ps-sm-0">
                <div className="degree d-flex align-items-start justify-content-center justify-content-sm-start">
                  <span
                    id="w-degree"
                    className="w-degree display-3 flex-sm-fill"
                  >
                    {props.data.temperature}
                  </span>
                  <button
                    type="button"
                    className="btn btn-link btn-degree btn-active flex-sm-fill btn-celsius"
                  >
                    °C
                  </button>
                  <span className="divider"></span>
                  <button
                    type="button"
                    className="btn btn-link btn-degree flex-sm-fill btn-fahrenheit"
                  >
                    °F
                  </button>
                </div>
                <small className="w-type">{props.data.description}</small>
              </div>
            </div>
          </div>
        </div>
        <div className="w-details mt-4 d-flex justify-content-center justify-content-sm-start">
          <span className="badge badge-custom bg-transparent">
            <WiStrongWind />
            <span className="w-wind">
              {Math.round(props.data.windSpeed)}m/s
            </span>
          </span>
          <span className="badge badge-custom bg-transparent">
            <WiCloud />
            <span className="w-clouds">{props.data.clouds}%</span>
          </span>
          <span className="badge badge-custom bg-transparent">
            <WiRaindrop />
            <span className="w-humidity">{props.data.humidity}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
