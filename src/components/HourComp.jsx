import moment from "moment";
import React from "react";
import { weatherCodesMapping } from "../utils";
import ArrowRight from "../assets/images/arrow-right.svg";
import ArrowLeft from "../assets/images/arrow-left.svg";
import ArrowStraight from "../assets/images/arrow-straight.svg";
import VerticalLine from "../assets/images/vartical-line.svg";
function HourComp({ data, currentTime }) {
  return (
    <>
      <div
        className={`hour-comp-main-div ${currentTime ? "time-highlight" : ""}`}
      >
        <p className="label-18">
          {currentTime ? "Now" : moment(data.date).format("HH:mm")}
        </p>
        <img
          src={weatherCodesMapping[data?.values?.weatherCode].img}
          alt=""
          width={48}
          height={48}
        />

        <p className="label-18">{Math.floor(data?.values?.temperature2m)} °C</p>
        <img
          src={
            Math.floor(data?.values?.windDirection10m) < 90 ||
            Math.floor(data?.values?.windDirection10m) > 270
              ? ArrowRight
              : Math.floor(data?.values?.windDirection10m) > 90 ||
                Math.floor(data?.values?.windDirection10m) < 270
              ? ArrowLeft
              : ArrowStraight
          }
        />

        <p className="label-18">{Math.floor(data?.values?.windSpeed)} km/h</p>
      </div>
      <img src={VerticalLine} alt="vertical-line" />
    </>
  );
}

export default HourComp;
