import React from "react";
import CardLayout from "./UI/CardLayout";
import moment from "moment";
import { weatherCodesMapping } from "../utils";
export default function SevenDayForecast({ dailyForecast }) {
  return (
    <CardLayout className={`seven-day-forecast-card-layout`}>
      <p className="label-18">7 Day Forecast</p>
      {Object.keys(dailyForecast).length > 0 &&
        Object.keys(dailyForecast).map((day, dayIndex) => {
          return (
            <DayForecast
              key={dayIndex}
              day={day}
              dayData={dailyForecast[day]}
              lastDay={dayIndex === 6 ? true : false}
            />
          );
        })}
    </CardLayout>
  );
}

function DayForecast({ day, dayData, lastDay }) {
  return (
    <div className={`flex items-center single-day justify-between ${lastDay ? "border-0" : 0}`}>
      <p style={{ width: "27%" }}>{moment(day).format("dddd")}</p>

      <img src={weatherCodesMapping[dayData.weatherCode].img} alt="" width={48} height={48} />
      <p className="capitalize"> {dayData.weatherCondition}</p>

      <p>
        {Math.floor(dayData.temperature2mMin)} - {Math.floor(dayData.temperature2mMax)} °C
      </p>
    </div>
  );
}
