import React from "react";
import ReactTypingEffect from "react-typing-effect";
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
            <h1 className="typing-effect">
              <ReactTypingEffect
                className="typingeffect"
                text={[
                  "Hello, welcome to my portfolio",
                  "I am Shanna :)",
                  "I am a webpage developer",
                  "Watch me break the internet",
                ]}
                speed={150}
                eraseDelay={700}
              />
            </h1>
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
