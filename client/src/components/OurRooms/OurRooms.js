import React from "react";
import acRoomImage1 from "../../assets/IMG-20240215-WA0056.jpg"; 
import acRoomImage2 from "../../assets/IMG-20240215-WA0056.jpg"; 
import acRoomImage3 from "../../assets/IMG-20240215-WA0056.jpg"; 
import nonAcRoomImage1 from "../../assets/IMG-20240215-WA0056.jpg";
import nonAcRoomImage2 from "../../assets/IMG-20240215-WA0056.jpg"; 
import nonAcRoomImage3 from "../../assets/IMG-20240215-WA0056.jpg"; 

function OurRooms() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Our Rooms</h2>
        <p>Discover our comfortable and stylish rooms for a relaxing stay.</p>
      </div>

      <div className="row">
        {/* AC Room 1 */}
        <div className="col-md-4 mb-4">
          <img
            src={acRoomImage1}
            alt="AC Room 1"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">AC Room 1</h4>
          <p>
            Our AC Room 1 provides a cozy and air-conditioned space with modern
            amenities, ensuring a comfortable and refreshing stay.
          </p>
        </div>

        {/* AC Room 2 */}
        <div className="col-md-4 mb-4">
          <img
            src={acRoomImage2}
            alt="AC Room 2"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">AC Room 2</h4>
          <p>
            Experience luxury and comfort in our elegantly designed AC Room 2.
            Enjoy a peaceful atmosphere and top-notch services.
          </p>
        </div>

        {/* AC Room 3 */}
        <div className="col-md-4 mb-4">
          <img
            src={acRoomImage3}
            alt="AC Room 3"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">AC Room 3</h4>
          <p>
            Indulge in a sophisticated retreat with our AC Room 3. Immerse
            yourself in a relaxing ambiance and exceptional amenities.
          </p>
        </div>

        {/* Non-AC Room 1 */}
        <div className="col-md-4 mb-4">
          <img
            src={nonAcRoomImage1}
            alt="Non-AC Room 1"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">Non-AC Room 1</h4>
          <p>
            Our Non-AC Room 1 offers a comfortable and budget-friendly option
            for your stay. Enjoy simplicity without compromising on quality.
          </p>
        </div>

        {/* Non-AC Room 2 */}
        <div className="col-md-4 mb-4">
          <img
            src={nonAcRoomImage2}
            alt="Non-AC Room 2"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">Non-AC Room 2</h4>
          <p>
            Embrace affordability and convenience in our Non-AC Room 2. Ideal
            for guests looking for a value-driven accommodation.
          </p>
        </div>

        {/* Non-AC Room 3 */}
        <div className="col-md-4 mb-4">
          <img
            src={nonAcRoomImage3}
            alt="Non-AC Room 3"
            className="img-fluid rounded"
          />
          <h4 className="mt-3">Non-AC Room 3</h4>
          <p>
            Experience a cozy stay with simplicity in our Non-AC Room 3. Relax
            in a welcoming atmosphere at an affordable rate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurRooms;
