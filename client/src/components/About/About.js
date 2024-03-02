import React from "react";
import aboutImage from "../../assets/IMG-20240215-WA0025.jpg"; 

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Centered Heading */}
        <div className="col-12 text-center mb-4">
          <h2>About Us</h2>
        </div>

        {/* First Column */}
        <div className="col-md-6">
          <p>
            Welcome to our hotel! We are committed to providing you with a
            comfortable and memorable stay. Our team is dedicated to ensuring
            that your experience is nothing short of exceptional.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
