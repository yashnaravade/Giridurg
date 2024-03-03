import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div>
      {/* bootstrap navbar with login button, links, and a language toggle, etc */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Bootstrap" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-auto">
              {" "}
              {/* Center the ul */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Rooms
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        AC
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Non-AC
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              {" "}
              {/* Right-align the login/signup button */}
              <button className="btn btn-primary mx-2">Login</button>
              <button className="btn btn-secondary ml-2 mx-2">Signup</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
