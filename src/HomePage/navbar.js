import React from "react";
import "./navBar.css";

export default function NavbarCmp() {
  return (
    <div className="navBar-wrapper">
      <img
        className="video"
        src="https://namoewaste.com/wp-content/uploads/2022/12/Namo-Nov-2022_22-3.png"
      />
      <div className="link-wrapper">
        <div className="company">REMINE INDIA</div>
        <a className="link" href="">
          HOME
        </a>
        <a className="link" href="">
          SERVICES
        </a>
        <a className="link" href="">
          CONTACT US
        </a>
        <a className="link" href="">
          ABOUT US
        </a>
      </div>
      {/* <div className="text-wrapper">
        <span className="head">CONDITIONS ARE PRIME FOR</span>
        <span className="head2">SPRING BREAK</span>
        <span className="text">Stay & ski from $151 per person/night</span>
      </div> */}
    </div>
  );
}
