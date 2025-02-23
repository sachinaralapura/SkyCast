import { useEffect, useState } from "react";
import LeftNav from "../assets/images/left-nav.svg";
import RightNav from "../assets/images/right-nav.svg";
import LeftNavGray from "../assets/images/left-nav-gray.svg";
import RightNavGray from "../assets/images/right-nav-gray.svg";
import CardLayout from "./UI/CardLayout";
import HourComp from "./HourComp";
function HourlyForecast({ hourlyData }) {
  const [disableLeftNav, setDisableLeftNav] = useState(true);
  const [disableRightNav, setDisableRightNav] = useState(false);

  const scrollRight = () => {
    if (disableRightNav) {
      return;
    }
    const scrollVariable = document.querySelector(".hourly-forecast-card-layout");
    setDisableLeftNav(false);
    scrollVariable.scrollBy({ left: 720, behavior: "smooth" });

    if (Math.floor(scrollVariable.scrollLeft) + scrollVariable.clientWidth + 10 >= scrollVariable.scrollWidth) {
      setDisableRightNav(true);
    }
    //   if (
    //     scrollVariable.scrollLeft >=
    //     scrollVariable.scrollWidth - scrollVariable.clientWidth
    //   ) {
    //     setDisableRightNav(true);
    //   }
  };

  const scrollLeft = () => {
    if (disableLeftNav) {
      return;
    }
    const scrollVariable = document.querySelector(".hourly-forecast-card-layout");
    setDisableRightNav(false);
    scrollVariable.scrollBy({ left: -720, behavior: "smooth" });
    if (scrollVariable.scrollLeft === 0) {
      setDisableLeftNav(true);
    }
  };

  // if the user scrolls with trackpad or touchscreen
  useEffect(() => {
    document.querySelector(".hourly-forecast-card-layout").addEventListener("scroll", () => {
      let scrollVariable = document.querySelector(".hourly-forecast-card-layout");

      if (scrollVariable.scrollLeft === 0) setDisableLeftNav(true);
      if (Math.floor(scrollVariable.scrollLeft) + scrollVariable.clientWidth + 1 >= scrollVariable.scrollWidth)
        setDisableRightNav(true);
      else setDisableRightNav(false);
    });
  }, [setDisableLeftNav, setDisableRightNav]);

  return (
    <div className="hourly-forecast-container">
      <div className="hourly-title-container">
        <p className="forecast-title">Hourly Weather</p>
        <div className="hourly-navigation-arrow">
          <img src={disableLeftNav ? LeftNavGray : LeftNav} alt="" id="left-nav-btn" onClick={scrollLeft} />
          <img src={disableRightNav ? RightNavGray : RightNav} alt="" id="right-nav-btn" onClick={scrollRight} />
        </div>
      </div>
      <CardLayout className="p-0 hourly-forecast-card-layout">
        <div className="hourly-card-main-div">
          {hourlyData?.length > 0 &&
            hourlyData.map((ele, index) => {
              return <HourComp key={index} currentTime={ele.isClosestTime} data={ele} />;
            })}
        </div>
      </CardLayout>
    </div>
  );
}

export default HourlyForecast;
