import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TripContext } from '../context/TripContext';
import './TripList.css'; // Import the CSS file

const TripList = () => {
  const { trips } = useContext(TripContext);

  return (
    <div>
      <h1>My Trips</h1>
      <div className='trip-list'>
        {trips.map((trip) => (
          <div key={trip.id} className='trip-card'>
            <img src={trip.image} alt={trip.name} />
            <h2>{trip.name}</h2>
            <Link to={`/trip/${trip.id}`}>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
