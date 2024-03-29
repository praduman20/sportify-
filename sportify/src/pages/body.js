import "bootstrap/dist/css/bootstrap.min.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { BsCaretRightFill } from "react-icons/bs";
import Logo from "../images/info.png";
import logo1 from "../images/ball.gif";
import logo2 from "../images/chart.gif";
import logo3 from "../images/location.gif";
import logo4 from "../images/consultation.gif";
import { AiFillStar } from "react-icons/ai";
import { BiHappyBeaming } from "react-icons/bi";
import "../pages/style/body.css";

function body() {
  return (
    <>
      <div id="body" data-testid="body-1">
        <h1 className="header">Sportify</h1>
        <h2 className="small-header">
          <span>Eat.</span>
          <span>Sleep.</span>
          <span>Play.</span>
          <span>Repeat.</span>
        </h2>
      </div>
      <div id="info-body">
        <div>
          <p id="info-first">
            The only platform you need for sports <MdSportsSoccer />
            <MdSportsTennis /> <MdOutlineSportsCricket />
          </p>
        </div>
        <div id="info-second">
          <div id="info-row">
            <div className="info-column-one">
              <div className="row-ele">
                <BsCaretRightFill /> Play with your friends
                <img src={logo4} alt="loading..." className="gif-logo" />
              </div>
              <div className="row-ele">
                <BsCaretRightFill /> Book sports venue
                <img src={logo3} alt="loading..." className="gif-logo" />
              </div>
            </div>
            <div className="info-img">
              <img src={Logo} alt="Could not load" className="i-img" />
            </div>
            <div className="info-column-two">
              <div className="row-ele">
                <BsCaretRightFill /> Skill up your game
                <img src={logo2} alt="loading..." className="gif-logo" />
              </div>
              <div className="row-ele">
                <BsCaretRightFill /> Pay online/Play offline
                <img src={logo1} alt="loading..." className="gif-logo" />
              </div>
            </div>
          </div>
          <div id="users-info-row">
            <p className="users-info">2M + Users</p>
            <p className="users-info">Over 20+ Sports</p>
            <p className="users-info">Over 50k+ Clean and Sanitized Courts</p>
            <p className="users-info">Sports equipments Provided</p>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="wrapper">
          <iframe
            src="https://share.synthesia.io/embeds/videos/85a423d1-715b-49db-b5df-26340b506972"
            loading="lazy"
            title="Synthesia video player - Your AI video"
            allow="encrypted-media; fullscreen;"
            // className="intro-video embed-responsive-item"
          ></iframe>
        </div>
      </div>

      <div className="ratings">
        <p id="info-first">
          Verified by sportoholics <BiHappyBeaming />{" "}
        </p>
        <div className="rating">
          <div className="rate-box">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  I enjoy using this app. Booking courts for the weekends is
                  really convenient.
                </p>
                <h5 className="card-title">Piyush Jain</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Fantastic app. It's a good concept for all the sportslover and
                  fitness freaks out there.
                </p>
                <h5 className="card-title">Utkarsh Dhami</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Sportify is a cosy place. It will remain. Kudos to the whole
                  team of sportify.
                </p>
                <h5 className="card-title">Rohan Yadav</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
          </div>
          <div className="rate-box">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  The best app for finding courts in your area and making
                  reservations. It greatly aided me. Thanks.
                </p>
                <h5 className="card-title">Avni Mehrotra</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  The top app I've ever seen. This is the one for sports
                  enthusiasts. Easy to use too!!
                </p>
                <h5 className="card-title">Kushagra Chittora</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Love the app. Helps me play anytime anywhere. The courts are
                  good too.
                </p>
                <h5 className="card-title">Muskan Singh</h5>
                <p>
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />{" "}
                  <AiFillStar style={{ color: "#f9ce80" }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default body;
