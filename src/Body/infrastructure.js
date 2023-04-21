import React from "react";
import "./infrastructure.css";

export default function InfrastructureCmp() {
  return (
    <div className="infras-recycling-wrapper">
      <div className="recycling-wrapper">
        <span className="welcome">Welcome to Remine India</span>
        <span className="organisation">
          Producer Responsibility Organisation (PRO)
        </span>
        <span className="para1">
          Remine India Pvt. ltd. is an initiative started to remove the
          complexity out of the process of electronic assets management &
          recycling. Our aim is to provide a simple, straightforward,
          transparent and sustainable way to recycle and manage your E waste and
          Electronic assets.
        </span>
        <span className="para1">
          We collect all types of IT, electronics, electrical, media and
          communications equipment.
        </span>
        <span className="para1">
          We are authorized by the State Pollution Boards & Govt. of India to
          safely Collect, Transport, Dismantle, Segregate & Dispose E waste. We
          are also equipped as a Producer Responsibility Organisation (PRO) to
          fulfil all the statutory compliances for producers under Extended
          Producers Responsibility (EPR)
        </span>
        <span className="para1">
          With the help of advanced, indigenous technologies, able and committed
          workforce and a never ending commitment to the environment, we aim to
          provide increased value to our clients for all their electronic
          inventories ranging from end-of-life electronics to surplus and
          seconds electronics, while creating awareness for the need to recycle
          E waste in an environment-friendly way and adopt sustainable
          technology disposal policies for a greener, safer planet for the
          generations to come.
        </span>
        <button className="button">OUR SERVICES</button>
      </div>
      <div className="infrs-wrapper">
        <span className="infras">Infrastructure</span>
        <span className="para2">
          Our state of the art plant at Samalkha and Panipat, near New
          Delhi(NCR), are equipped with European machinery for size reduction,
          segregation & pulverization of e-waste, along with our indigenously
          developed hydrometallurgical process for refining of precious metals,
          processes for recycling of Lithium-ion Batteries / Cells and Solar PV
          Module Recycling, enables us to recycle and recover up to 98 % of
          recyclable products and dispose of the remaining waste through TSDF.
          All our employees are well trained in handling the materials and work
          in an environment that conforms to all the required Environment,
          Health & Safety regulations. Our facilities are R2 Certified by SERI
        </span>
      </div>
    </div>
  );
}
