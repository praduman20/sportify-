import "./style/ProductDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import Logo from "../images/Court.webp";
import { Link } from "react-router-dom";

const ProductDetailPage = (props) => {
  return (
    <div className="container product-detail-container">
      <div className="left-body container">
        <h1 className="product-name">
          Sporto Academy{" "}
          <Rating
            name="sporto-rating"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </h1>
        <p className="location">
          Marathahalli, Bangalore <GrLocation />
        </p>
        <img src={Logo} alt="turf-pic" className="img-book" />
        <div className="sports">
          <div>
            <h2 className="heading">
              Sports available <MdSportsTennis /> <MdOutlineSportsCricket />{" "}
              <MdSportsSoccer /> -
            </h2>
          </div>
          <div className="sports-name">
            <p className="name">Badminton</p>
            <p className="name">Cricket</p>
            <p className="name">Football</p>
          </div>
        </div>
      </div>
      <div className="right-body">
        <div className="timing">
          <p className="time">
            Timing <GiAlarmClock />
          </p>
          <p className="time">6 a.m - 10 p.m</p>
        </div>
        <div className="map">
          <p className="map-item">
            Location <BiCurrentLocation />
            <iframe
              width="100%"
              height="100%"
              title="locationOnMap"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=marathalli , bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              className="map-item gmap"
            ></iframe>
          </p>
        </div>
        <Link to="/info">
          <button className="btn book-btn" alt="BOOK NOW">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
