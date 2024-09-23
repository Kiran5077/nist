import React from 'react';
import './Placement.css'
import placement_image from '../../assets/placement.jpg'
const PlacementDetails = () => {
  return (
    <div className="placement">
      <div className="placement-left">
      <h1>Placement</h1>
      <p>
        NIST has always been a much-favoured talent hunting ground for the corporate world
        as it delivers industry-ready students. NIST has produced thousands of professionals in
        various disciplines, including engineering, science, and management. Over 16000 NIST
        alumni today contribute in technology, leadership, management, and public and social
        services around the globe.
      </p>
      <p>
        Placement is one of the advantages that NIST has offered since its inception. It has an
        impeccable record for campus placement. A well-organised placement team under the
        leadership and guidance of the Hon'ble Chairman, Dr. Sukant K. Mohapatra,
        streamlines the recruitment process and helps students get the jobs of their choice.
      </p>
      <p>
        For the 2019-2023 batch, the highest CTC of INR 19.15 LPA with an average of 5.65 LPA
        is offered during the current placement session, where more than 67 companies, like
        Western Digital, McAfee software, Texas Instruments, Wipro, TCS, ICICI Bank, India Mart,
        PWC, Berger Paints, Tata Power, Adani Group, and Hindustan Construction Company,
        among various others, have recruited.
      </p>
      <p>
        In the past few years, we have seen the best placement record in the history of NIST,
        irrespective of COVID-19 pandemics and challenges. However, we have opportunities to
        improve and do better, and a long way to go.
      </p>
        </div>
        <div className='placement-right'>
        <img src={placement_image} alt="" className='placement-img'/>
    </div>
      </div>
    
  );
};

export default PlacementDetails;