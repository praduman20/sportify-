import "../pages/style/about.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutLogo from "../images/sapiens.png";
import About1 from "../images/about.png";
import About2 from "../images/aboutus.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="main-about">
        <div className="bg-light">
          <div className="container">
            <div className="row h-20 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-2">About us</h1>
                <p className="lead text-muted mb-0">
                  Sportify is a top sports activity facilitator in Bangalore.
                </p>
                <p className="lead text-muted">
                  We offer a one-stop shop for sports enthusiasts to find
                  playmates, find venues, improve their skills, organise their
                  activities easily, and stay active and fit. So!!!
                  <strong>EAT.SLEEP.PLAY.REPEAT</strong>
                </p>
                <Link to="/" className="btn btn-sm py-3 px-5 about-btn">
                  <span>Go To Home</span>
                </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img src={AboutLogo} alt="Sports-pic" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-2">
          <div className="container py-3">
            <div className="row align-items-center mb-5 py-3">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">OUR STORY</h2>
                <p className="font-italic text-muted mb-10 para about-para">
                  Like all fairytales, well this started with a few guys in
                  trouble. One was  was saddened by the badminton racquet left
                  behind, a second was dejected following another football
                  weekend that never materialised, a third was broke and
                  gym-less due to another membership getting lost, and a
                  fourth was simply #boredtodeath. Unfortunately, unlike
                  previous fairytales, no lovely damsel came to their aid, and
                  they wallowed in their misery for a time. In order to create
                  their own Neverland, a haven for other restless adrenaline
                  addicts like themselves, they eventually did what all
                  abandoned souls do. Sportify was therefore born as a concept
                  or, more accurately, a belief.
                </p>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src={About1}
                  alt="Sports-pic"
                  className="img-fluid mb-4 mb-lg-0 about-logo"
                />
              </div>
            </div>
            <div className="row align-items-center py-5">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src={About2}
                  alt="Sports-pic"
                  className="img-fluid mb-4 mb-lg-0 about-logo"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">OUR VISION</h2>
                <p className="font-italic text-muted mb-10 para about-para">
                  A dream to build a playground where you may blend in with
                  other outcasts and where entry is not restricted by thick
                  membership barriers. A conviction that you can play whenever,
                  whenever, and however you want without experiencing the misery
                  of waiting. A commitment to constructing a reality in which
                  one may both lose and find themselves, in which one can both
                  triumph and be defeated and laugh in both roles. A conviction
                  that playing the field is the ideal place to serve up
                  enjoyment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-4">
          <div className="container py-4">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light">Our team</h2>
                <p className="font-italic text-muted dev-text">
                  Meet the team of developers -
                </p>
              </div>
            </div>
            <div className="row text-center d-flex align-items-center justify-content-center">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                    alt="Sports-pic"
                    width={100}
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Nilansh Audichya</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt="Sports-pic"
                    width={100}
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Praduman Singh</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
