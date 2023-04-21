import React from "react";
import "./footer.css";

export default function FooterTopCmp() {
  return (
    <div className="footer-wrapper">
      <div className="footer-top-wrapper">
        <div className="subscribe-wrapper">
          <span className="subscribe">Subscribe to our Newsletter!</span>
          <span className="sign-up">
            Sign up to receive environmental news and updates!
          </span>
        </div>
        <input className="input" placeholder="Your E-mail" />
        <button className="button">SEND</button>
      </div>
      <hr />
      <div className="footer-bottom-wrapper">
        <div className="bottom">
          <p className="head">About us</p>
          <p className="para">
            Remine Recycling Pvt. ltd. is an initiative started to remove the
            complexity out of the process of electronic assets management &
            recycling. Our aim is to provide a simple, straightforward,
            transparent and sustainable way to recycle and manage your E waste
            and Electronic assets.
          </p>
        </div>
        <div className="bottom">
          <p className="head">Recycling</p>
          <p className="para">Precious Metal Refining</p>
          <p className="para">Precious Metal Management</p>
          <p className="para">Jwelery & Industrial Metals</p>
          <p className="para">Battery Recycle Solutions</p>
        </div>
      </div>
    </div>
  );
}
