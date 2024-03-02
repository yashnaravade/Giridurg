import React from "react";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="mt-5 py-4">
      <div className="container">
        <div className="row">
          {/* First Column - Logo */}
          <div className="col-md-3">
            <span className="footer-brand">Your Hotel</span>
          </div>

          {/* Second Column - Navigation Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/ourrooms">Our Rooms</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Third Column - Social Links */}
          <div className="col-md-3">
            <h5>Connect With Us</h5>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Fourth Column - Additional Content */}
          <div className="col-md-3">
            <h5>Hotel Information</h5>
            <ul className="list-unstyled">
              <li>Name: Your Hotel</li>
              <li>Email: hotel@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main Street, Cityville</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
