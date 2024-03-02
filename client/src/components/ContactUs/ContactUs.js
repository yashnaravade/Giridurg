import React from "react";

function ContactUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Centered Heading */}
        <div className="col-12 text-center mb-4">
          <h2>Contact Us</h2>
        </div>

        {/* Left Side - Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="col-md-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.7413297456615!2d74.04285977459514!3d15.817587646126492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf85eccc61dffd%3A0x1f1c94722f30f957!2sKilla%20Pargad%2C%20Pargadh%20Fort%20Road%2C%20Pargad%2C%20Maharashtra%20416509!5e0!3m2!1sen!2sin!4v1709362220564!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
