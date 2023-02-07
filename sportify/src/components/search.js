import "bootstrap/dist/css/bootstrap.min.css";
import "./css/search.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";

function Search() {
  return (
    <>
      <div className="container book-box">
        <h2>
          Find Sports venues around you <MdSportsSoccer /> <MdSportsTennis />{" "}
          <MdOutlineSportsCricket />
        </h2>
        <form className="d-flex city-form" role="search">
          <input
            className="form-control me-2 input"
            type="search"
            placeholder="Search Your Venue"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="city-box">
          <div>
            <p className="intro">
              We are only available in this city for the time being.
            </p>
          </div>
          <div className="city">
            <p className="city-name">Bangalore</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
