import "bootstrap/dist/css/bootstrap.min.css";
import "./css/search.css";
import { MdSportsSoccer } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { toast } from "react-toastify";

function Search() {
  const form = document.querySelector("search-form");
  const handleClick = (e) => {
    e.preventDefault();
    toast.error(
      "This functionality will be added soon. Sorry for the inconvenience 🚫",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    form.reset();
  };

  return (
    <>
      <div className="container book-box">
        <h2 className="search-header">
          Find Sports venues around you <MdSportsSoccer /> <MdSportsTennis />{" "}
          <MdOutlineSportsCricket />
        </h2>
        <form className="d-flex city-form search-form" role="search">
          <input
            className="form-control me-2 input"
            type="search"
            placeholder="Search Your Venue"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" onClick={handleClick}>
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
