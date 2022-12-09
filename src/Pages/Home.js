import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { FcHome } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { useEffect, useState } from "react";
import Team from "./img/group-photo.png";
import WebDev from "./img/webdev.jpg";
import Jessica from "./img/jessica.png";
import { FcCalendar } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";

const items = [
  {
    name: "Joe Herrington just made a reservation at Waukesha Campus for 12/8/2022! ",
  },
  {
    name: "Tiffany Dillion just made a reservation at Research Park for 12/8/2022!",
  },
  {
    name: "Drew Miller just made a reservation at Waukesha Campus for 12/8/2022!",
  },
];

function Home() {
  let navigate = useNavigate();

  const [mediaItem, setMediaItem] = useState(items[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      5000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setMediaItem(items[index]);
  }, [index]);

  return (
    <div className="home">
      <div className="showcase">
        <div className="tabs">
          <br></br>
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
              navigate("/Login");
            }}
          >
            <span>{<FcViewDetails size={40} />}</span>
          </button>
        </div>
        <div className="section-main container">
          <h1>
            <strong>
              <em>GEHC's Cubicle Reservation</em>
            </strong>
          </h1>
          <span className="title-h2">
            Your location for hybrid innovation🌐
          </span>
          <p className="title-small">
            In collaboration with Tech Tok Consulting, GEHC's "Cubicle
            Reservation" is the best way to reserve a cubicle to get the most
            out of your hybrid work experience.
          </p>
          <br />
          <div class="container">
            <h2 class="title">
              <span class="title-word title-word-1">Meet |</span>
              <span class="title-word title-word-2"> The |</span>
              <span class="title-word title-word-3"> Tech Tok |</span>
              <span class="title-word title-word-4"> Team |</span>
            </h2>
          </div>
          <img src={Team} alt="team" />
          <h4>Mission:</h4>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <center>
            <section className="mission">
              <h2 className="section-head">Our Mission</h2>
              <br />
              <br />
              <p className="lead">
                “Here at Tech Tok, we strive to create the best tech consulting
                experience by providing a fresh approach to web development
                collaborative projects. With customer satisfaction being our top
                priority, we integrate the vision our customers have while using
                state of the art tools that push past the limits set before us
                like never before."
              </p>
              <br />
              <br />
              <h2 className="section-head">Our Vision</h2>
              <br />
              <br />
              <p className="lead">
                “To serve the world of technology with innovation, creativity, &
                integrity to bring your business’ web ideas to life.”
              </p>
            </section>
            <br />
          </center>
        </div>
      </section>
      <section id="employees" className="section">
        <div className="container">
          <span className="emp-title">
            <strong>
              <em>USER STORY</em>
            </strong>
          </span>
          <br />
          <h4>Let's hear what they have to say...</h4>
          <div id="userstory" className="shadow">
            <br />
            <br />
            <img src={WebDev} alt="kenneth" className="bottom"></img>
            <img src={Jessica} alt="jessica" className="top"></img>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h4>
            <em>
              - Jessica (29), Supervisor: "I love my job but since the pandemic,
              there's no way to schedule office space. I wish there was a
              website that could make getting back into the office more
              convenient for collaboration and professional development."
            </em>
          </h4>
          <br />
          <h4>
            <em>
              - Kenneth (24), Junior Web Developer: "I want to move up in the
              corporate world but it's hard getting in contact with the people
              that could help. There's a lot of unused space that could be used.
              I favor a way to schedule time to be able to use the many empty
              cubicles. Having a way to schedule an office space that will
              benefit everyone including me."
            </em>
          </h4>
          <br />
        </div>
      </section>
      <section id="research" className="section bg-light">
        <div className="container">
          <h1 className="evi-title">
            <u>
              <strong>Evidence Based Research</strong>
            </u>
          </h1>
          <br />
          <h4>
            <span>
              &#128269; 67% of customers prefer self-service instead of talking
              to a representative for booking a reservation.
            </span>
          </h4>
          <br />
          <h4>
            <span>
              &#128269; 70% of people that make reservations expects a website
              to include self service for making a reservation.
            </span>
          </h4>
          <br />
          <h4>
            <span>
              &#128269; 44% of U.S. employees prefer a hybrid work model,
              compared to 51% of employers.
            </span>
          </h4>
          <br />
          <h4>
            <span>
              &#128269; 63% of high-growth companies use a “productivity
              anywhere” hybrid work model.
            </span>
          </h4>
          <br />
          <h4>
            <span>
              &#128269; 55% of employees want to work remotely at least three
              days a week.
            </span>
          </h4>
        </div>
      </section>
      <section id="entertainment" className="section">
        <div className="container">
          <center>
            <h2 className="section-head">Making the Office Yours...</h2>
            <br />
            <h3>Anywhere, Anytime. However You Like 😜😎</h3>
            <br />
            <p className="lead">
              Use your employee login information to access the flexbility
              you've always wanted. With this web application, you'll be able to
              choose which location you'd like to reserve the time for, the
              date, and integrate it into your calendar. Multiple options to
              give you the freedom you've always wanted!
            </p>
            <br />
            <br />
            <div className="auto-text-display">
              <center>
                <h1>
                  <strong>Who's currently making reservations?</strong>
                </h1>
              </center>
              <br />
              <center>
                <span>{<FcCalendar size={40} />}</span>
              </center>
              <br></br>
              <div className="res-msg">
                Recent Reservations: {mediaItem.name}
              </div>
              <br></br>
              <center>
                <span>{<FcOvertime size={40} />}</span>
              </center>
              <br></br>
              <div className="res-msg">
                <center>A custom calendar to meet your needs!</center>
              </div>
            </div>
            <br />
            <p>
              <em>
                <strong>
                  Are you ready to begin? Click on the LOGIN ICON below to
                  proceed!
                </strong>
              </em>
            </p>
            <br />
            <span className="hand-emoji">&#128073;</span>
            <button
              onClick={() => {
                navigate("/Login");
              }}
            >
              <span>{<FcViewDetails size={40} />}</span>
            </button>
          </center>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="gift-cards">
            <div>
              <h2>Contact Us</h2>
              <br />
              <p>
                If you're having any technical issues, would like to provide
                feedback, or are interested in learning more about how
                everything works, please feel free to contact us at
                techtokconsulting2@gmail.com
              </p>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-bottom text-center">
            Copyright &copy; 2022 TECH TOK CONSULTING
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
