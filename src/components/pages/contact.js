import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";
import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <a href="https://www.instagram.com/missmeow_meow_/">
                <FontAwesomeIcon icon="hashtag" />
              </a>
            </div>
            <div className="text">Social Media</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <a href="mailto:shannabreaking@gmail.com">
                <FontAwesomeIcon icon="envelope-open-text" />
              </a>
            </div>

            <div className="text">Email Me</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Atlanta, GA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
