import "./style/ProductDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ProductDetailPage = (props) => {
  return (
    <div className="container product-detail-container">
      <div className="left-body">
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
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2021/6/CX/CQ/AY/475165/football-turf-1000x1000.png"
          alt="turf-pic"
          className="img-book"
        />
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
            <i>B</i>
            <i>O</i>
            <i>O</i>
            <i>K</i>
            <i>&nbsp;</i>
            <i>N</i>
            <i>O</i>
            <i>W</i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
