import React from "react";
import "./servicesSolution.css";
import ServicesData from "./servicesData";

export default function ServicesSolutionCmp() {
  return (
    <div>
      <div className="heading-wrapper">
        <span>Services & </span>
        <span className="solution-head"> Solutions</span>
      </div>
      <span className="services-para">
        We offer comprehensive recycling, industry-specific waste management,
        quality control & sustainability solutions for businesses and
      </span>
      <span className="services-para">corporations.</span>
      <div className="services-solution-wrapper">
        <div className="b">
          <ServicesData
            label={"Recycling & Recovery"}
            para={
              "It is a fact that obtaining precious metals, rare earths and minerals through recycling of E- waste, Li-ion Batteries (LIB), Solar PV Modules is much more economical than obtaining them though the mining process. This helps to lessen the burden on earth’s eco system and environment to fulfill the demand for precious metals, rare earths and minerals. Exigo operates its own recycling & recovery facility. With our state of the art recycling technology, we are able to reach an efficiency of recovering upto 98% of the recyclable products and dispose off the remaining hazardous waste through TSDF."
            }
          />
        </div>
        <div className="b">
          <ServicesData
            label={"Take-back & Reverse Logistics"}
            para={
              "“Remine has well connected logistic partners all across the country”. This allows us to manage products that fail/ reach their end-of-life or are returned by customers. We provide custom disposal solutions for collection, reuse or recycling of your product at its end-of-life through customized take-back solutions via our group company www.recycledevice.com . The product category is updated regularly and more comprehensive solutions are provided to ensure better customer experience."
            }
          />
        </div>
        <div className="b">
          <ServicesData
            label={"IT Asset Management"}
            para={
              "Remine offers comprehensive asset management services to its clients. Our Asset management services include: • Asset Removal • Data Destruction • Logistics Management • Inventory List Reconciliation • Asset Tracking • Processing"
            }
          />
        </div>
      </div>
      <div className="services-solution-wrapper">
        <div className="b">
          <ServicesData
            label={"Data Destruction"}
            para={
              "Protecting your confidential information while handing over your data devices poses a serious threat to data security of any organization. Remine’s data destruction services provides customers peace of mind by offering world class data destruction as per our customer’s needs and policies. Remine has developed Mobile Hard drive/media shredding vehicles along with portable shredding machines to shred the media at client’s premises. Off-site Data Destruction Services •"
            }
          />
        </div>
        <div className="b">
          <ServicesData
            label={"Specialized Security Services"}
            para={
              "Prototype Destruction In this competitive era, R & D facilities have to make sure that their trade secrets are protected and grey market sales are avoided. Remine provides a range of prototype destruction services that includes on-site destruction of prototypes using our mobile shredders and/or highly secured transportation of prototypes to our facility for destruction. We have installed highly capable european shredders that are best in the business. The entire disposal process can be recorded on camera as per client’s request."
            }
          />
        </div>
        <div className="b">
          <ServicesData
            label={"Portable Shredding"}
            para={
              "High security and data protection is priority for Institutions like Banks, Financial or Governmental Institutions. Exigo’s portable shredding services provides its clients with the option of shredding their data bearing media like Hard drives, Back-up tapes etc. on-site for complete peace of mind. Our mobile shredding options range from shredder equipped vehicles to portable shredders which can be taken into our client’s premises for shredding media."
            }
          />
        </div>
      </div>
    </div>
  );
}
