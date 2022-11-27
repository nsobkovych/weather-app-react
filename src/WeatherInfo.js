import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { WiStrongWind, WiRaindrop } from "react-icons/wi";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card-body text-center">
        <div className="row row-cols-1 row-cols-sm-2 align-items-end">
          <div className="col text-sm-start mb-3 mb-sm-0">
            <h1 className="city">
              {props.data.city}
            </h1>
            <FormattedDate date={props.data.date} />
          </div>
          <div className="col my-3 my-sm-0">
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col align-self-end text-sm-end mb-3 mb-sm-0">
                <WeatherIcon
                  icon={props.data.icon}
                  size={64}
                  alt={props.data.description}
                />
              </div>
              <div className="col text-sm-start ps-sm-0">
                <WeatherTemperature celsius={props.data.temperature} />
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
            <WiRaindrop />
            <span className="w-humidity">{props.data.humidity}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
