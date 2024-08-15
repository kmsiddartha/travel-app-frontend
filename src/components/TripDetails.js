import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TripContext } from '../context/TripContext';
import './TripDetails.css'; // Import the CSS file

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { trips } = useContext(TripContext);

  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <div className='trip-details'>
      <button className='back-button' onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      {trip ? (
        <>
          <h1>{trip.name}</h1>
          <img src={trip.image} alt={trip.name} />
          <p>{trip.description}</p>
          <h2>Trip Highlights</h2>
          <p>{trip.details}</p>

          {/* Conditionally render additional images if they exist */}
          {trip.images && trip.images.length > 0 && (
            <div>
              <h2>Photos from the Trip</h2>
              <div className='trip-images'>
                {trip.images.map((img, index) => (
                  <img key={index} src={img} alt={`Trip photo ${index + 1}`} />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Trip not found</p>
      )}
    </div>
  );
};

export default TripDetails;
