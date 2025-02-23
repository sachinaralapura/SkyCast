import React from "react";
import CardLayout from "./UI/CardLayout";
import SunMini from "../assets/images/sun-mini.svg";
function UnitMetrixComp({ label, value, unit }) {
  console.log("value", value);
  return (
    <CardLayout className="unit-metrix-main-div">
      <img src={SunMini} alt="" />
      <div>
        <p className="label-18 uppercase">{label}</p>
        <p className="label-18 font-30">
          {value} {unit}
        </p>
      </div>
    </CardLayout>
  );
}

export default UnitMetrixComp;
