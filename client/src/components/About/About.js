import React from "react";
import "./About.css";
import aboutImage from "../../assets/IMG-20240215-WA0049.jpg";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-2 text-dark">About Us</h2>
      <div className="underline mb-4"></div>
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <p>
              Welcome to our hotel near Shivaji Maharaj's fort "Pargad"! We
              offer unmatched services and are committed to providing you with a
              comfortable and memorable stay. Our team is dedicated to ensuring
              that your experience is nothing short of exceptional.
            </p>
            <p>
              Our hotel is located in the picturesque surroundings of Shivaji
              Maharaj's fort "Pargad," offering breathtaking views and a
              peaceful atmosphere. Whether you're here for business or leisure,
              we strive to make your stay unforgettable.
            </p>
            <p>
              Experience our hospitality and discover the beauty of the region.
              Book your stay with us today!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
