import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const { loginWithRedirect } = useAuth0();
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary fixed-top self-nav">
          <div className="container-fluid res-nav">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                alt="Logo"
                width={30}
                height={24}
                className="d-inline-block align-text-top logo"
              />
            </Link>

            <form className="d-flex res-form" role="search">
              <Link to="/book" className="link-book">
                Book
              </Link>
              <Link to="/contact" className="link-book">
                Contact
              </Link>
              <li className="user-name">
                {isAuthenticated && <p>Hi! {user.name}</p>}
              </li>
              <div>
                {isAuthenticated ? (
                  <button
                    className="btn btn-outline-success me-2 btn-color"
                    type="button"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success me-2 btn-color"
                    type="button"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
