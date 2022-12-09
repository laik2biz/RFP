import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import ContactUs from "./ContactUs";
import { FcAdvance } from "react-icons/fc";

function About() {
  let navigate = useNavigate();

  return (
    <div className="about">
      <div className="tabs">
        <br></br>
        <center>
          <button
            onClick={() => {
              navigate("/Home");
            }}
          >
            <span>{<FcHome size={40} />}</span>
          </button>
          &nbsp;
          <button
            onClick={() => {
              navigate("/About");
            }}
          >
            <span>{<FcAbout size={40} />}</span>
          </button>
          &nbsp;
          <span>
            <button
              onClick={() => {
                navigate("/Home");
              }}
            >
              Logout<span>{<FcAdvance size={40} />}</span>
            </button>
          </span>
        </center>
        &nbsp;
      </div>

      <div class="container">
        <h2 class="title">
          <span class="title-word title-word-1">We |</span>
          <span class="title-word title-word-2"> Value |</span>
          <span class="title-word title-word-3"> Your |</span>
          <span class="title-word title-word-4"> Ideas |</span>
        </h2>
      </div>
      <center>
        <div className="body-1">
          <p className="p-title">
            <h1>
              <strong>
                <em>{<FcFeedback />} Let's Work Together. 🤝</em>
              </strong>
            </h1>
            <br />
            <center>
              <p>
                Please leave us feedback on improvements you would like to see
                and share your experience with us!
              </p>
            </center>
            <center>
              <ContactUs />
            </center>
          </p>
        </div>
      </center>
    </div>
  );
}

export default About;
