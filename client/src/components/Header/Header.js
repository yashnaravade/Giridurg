import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css"; // Replace with the correct path to your CSS file

function Header() {
  return (
    <div>
      {/* Topbar */}
      <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
        </div>
      </section>

      {/* Header */}
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <div className="logo me-auto">
            <h1><a href="index.html">Delicious</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
              <li><a className="nav-link scrollto" href="#events">Events</a></li>
              <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#book-a-table" className="book-a-table-btn scrollto">Book a table</a>

        </div>
      </header>
    </div>
  );
}

export default Header;
