import React from "react";
import "./motives.css";

export default function MotivesCmp() {
  return (
    <div>
      <div className="motive-wrapper">
        <div className="motive1">
          <span className="head">e-Waste Management</span>
          <span className="para">
            Rapid technology change, low initial cost, and even planned
            obsolescence have resulted in a fast-growing surplus, which
            contributes to the increasing amount of electronic waste around the
            globe.At Exigo we provide end to end management of e-waste. From
            E-Waste to virgin resources.
          </span>
        </div>
        <div className="motive2">
          <span className="head2">Environment and Sustainability</span>
          <span className="para2">
            We help business adopt sustainable and environmentally responsible
            recycling practices.Our team of professionals ensure that clients
            adhere to the globally accepted disposal processes.
          </span>
        </div>
      </div>
    </div>
  );
}
