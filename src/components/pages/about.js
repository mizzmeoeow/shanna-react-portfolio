import React from "react";
import profilePicture from "../../../static/assets/about/images/me.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="right-about-me">
          <div className="heading">
            <h2>Hello, nice to meet you, I am Shanna.</h2>
            <h3>
              A Full Stack <u>Developer</u>
            </h3>
          </div>
          <div className="about-me">
            I started my journey into coding at a later age, after many years of
            working in the customer service industry. I am currently enrolled in
            a coding Bootcamp with Bottega Tech and will be finishing up really
            soon. I am hoping my time in various fields of work will help me
            bring something new to discover in the world of code. Come watch me
            on my journey, I'm breaking in!
          </div>
        </div>
      </div>
    </div>
  );
}
