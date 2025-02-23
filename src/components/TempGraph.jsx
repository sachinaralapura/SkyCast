import React from "react";
import CardLayout from "./UI/CardLayout";
import Clock from "../assets/images/clock.svg";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function TempGraph({ hourlyData }) {
  console.log(hourlyData);
  const timeHours =
    hourlyData?.length > 0 ? hourlyData?.map((item) => moment(new Date(item.date)).format("h:mm a")) : [];

  const temperatureData =
    hourlyData?.length > 0 ? hourlyData?.map((item) => Math.floor(item?.values?.temperature2m)) : [];

  return (
    <CardLayout className="temp-graph-card-layout">
      <div className="flex items-center">
        <img src={Clock} alt="" />
        <p className="time-format-text">24-Hour Forecast</p>
      </div>
      <LineChart timeHours={timeHours} temperatureData={temperatureData} />
    </CardLayout>
  );
}



const LineChart = ({ timeHours, temperatureData }) => {
  const data = {
    labels: timeHours.map((hour) => `${hour}`),
    datasets: [
      {
        label: "Temperature (℃)",
        data: temperatureData,
        fill: false,
        borderColor: " #FFC355",
        pointRadius: 5,
        pointBackgroundColor: "#ffc355",
        pointHoverRadius: 8,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for the x - axis
        },
        ticks: {
          color: "white", //Customize x - axis tick Color
        },
        title: {
          display: true,
          text: "Hour",
          color: "white", // Customise x - axis label color
        },
        border: {
          color: "white", // customise x-axis line color
        },
      },

      y: {
        grid: {
          display: false, // Hide grid lines for the y - axis
        },
        ticks: {
          color: "white", //Customize y - axis tick Color
        },
        title: {
          display: true,
          text: "Temperature",
          color: "white", // Customise y - axis label color
        },
        border: {
          color: "white", // customise y-axis line color
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={chartOptions} />;
};
