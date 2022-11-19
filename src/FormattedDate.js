import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dateNumber = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <div className="FormattedDate">
      <div className="card-text date">{day}, {dateNumber} {month}</div>
      <div className="card-text time">{hours}:{minutes}</div>
    </div>
  )
}