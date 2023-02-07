import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/footer.css";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer-20192">
        <div className="site-section">
          <div className="container">
            <div className="cta d-block d-md-flex align-items-center px-5">
              <div>
                <h2 className="mb-0">Have a query?</h2>
                <h3 className="text-dark">Let's sort that out!</h3>
              </div>
              <div className="ml-auto">
                <Link to="/contact" className="btn button py-3 px-5">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Link to="/" className="footer-logo">
                  Sportify
                </Link>
                <p className="copyright">
                  <small>© 2023</small>
                </p>
              </div>
              <div className="col-sm">
                <h3>Know a little</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <h3>Contact</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm">
                <h3>Own a turf/court??</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/list">List Here</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>Follow us</h3>
                <ul className="list-unstyled social">
                  <li>
                    <Link to="#">
                      <SlSocialFacebook className="logos" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <SlSocialInstagram className="logos" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <SlSocialLinkedin className="logos" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <SlSocialTwitter className="logos" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
