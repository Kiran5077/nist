import React from 'react';
import './Facility.css'

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h1>Facilities</h1>
      <div className="facility-list">
        <div className="facility">
          <i className="fas fa-users" />
          <h2>A/C Classrooms</h2>
        </div>
        <div className="facility">
          <i className="fas fa-users" />
          <h2>Auditorium</h2>
        </div>
        <div className="facility">
          <i className="fas fa-bed" />
          <h2>Hostel</h2>
        </div>
        <div className="facility">
          <i className="fas fa-microscope" />
          <h2>Labs</h2>
        </div>
        <div className="facility">
          <i className="fas fa-coffee" />
          <h2>Cafeteria</h2>
        </div>
        <div className="facility">
          <i className="fas fa-book-open" />
          <h2>Library</h2>
        </div>
        <div className="facility">
          <i className="fas fa-plus" />
          <h2>Medical</h2>
        </div>
        <div className="facility">
          <i className="fas fa-basketball-ball" />
          <h2>Sports</h2>
        </div>
        <div className="facility">
          <i className="fas fa-wifi" />
          <h2>Wi-Fi Campus</h2>
        </div>
        <div className="facility">
          <i className="fas fa-bus" />
          <h2>Transport</h2>
        </div>
        <div className="facility">
          <i className="fas fa-bus" />
          <h2>Galleria</h2>
        </div>
        <div className="facility">
          <i className="fas fa-bus" />
          <h2>LHC</h2>
        </div>       
      </div>
    </div>
  );
};

export default Facilities;