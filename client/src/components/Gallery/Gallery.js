import React from "react";
import "./Gallery.css";
import galleryImage1 from "../../assets/IMG-20240215-WA0070.jpg";
import galleryImage2 from "../../assets/IMG-20240215-WA0071.jpg";
import galleryImage3 from "../../assets/IMG-20240215-WA0072.jpg";
import galleryImage4 from "../../assets/IMG-20240215-WA0073.jpg";
import galleryImage5 from "../../assets/IMG-20240215-WA0074.jpg";
import galleryImage6 from "../../assets/IMG-20240215-WA0075.jpg";
import galleryImage7 from "../../assets/IMG-20240215-WA0078.jpg";
import galleryImage8 from "../../assets/IMG-20240215-WA0077.jpg";

function Gallery() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Gallery</h2>
        <p>
          Explore our gallery showcasing breathtaking views near Pargad fort.
        </p>
      </div>

      <div className="row">
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage1}
            alt="Gallery Image 1"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage2}
            alt="Gallery Image 2"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage3}
            alt="Gallery Image 3"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage4}
            alt="Gallery Image 4"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage5}
            alt="Gallery Image 5"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage6}
            alt="Gallery Image 6"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage7}
            alt="Gallery Image 7"
            className="img-fluid rounded gallery-image"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage8}
            alt="Gallery Image 8"
            className="img-fluid rounded gallery-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
