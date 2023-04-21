import React from "react";
import "./servicesData.css";

export default function ServicesData({ label, para }) {
  return (
    <div className="services-wrapper">
      <p className="head">{label}</p>
      <p className="para">{para}</p>
    </div>
  );
}
