import React from "react";
import galleryImage1 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage2 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage3 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage4 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage5 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage6 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage7 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image
import galleryImage8 from "../../assets/IMG-20240215-WA0070.jpg"; // Replace with the actual path to your image

function Gallery() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Gallery</h2>
        <p>Explore our gallery showcasing memorable moments and experiences.</p>
      </div>

      <div className="row">
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage1}
            alt="Gallery Image 1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage2}
            alt="Gallery Image 2"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage3}
            alt="Gallery Image 3"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage4}
            alt="Gallery Image 4"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage5}
            alt="Gallery Image 5"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage6}
            alt="Gallery Image 6"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage7}
            alt="Gallery Image 7"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={galleryImage8}
            alt="Gallery Image 8"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
