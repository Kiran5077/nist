import React from 'react';
import './Course.css'

const Courses = () => {
  const courses = [
    {
      name: 'B.Tech',
      eligibility: '10+2 + JEE Main',
      fees: '83,500 (1st Year Fees)'
    },
    {
      name: 'MBA',
      eligibility: 'Graduation',
      fees: '1.2 Lakhs (1st Year Fees)'
    },
    {
      name: 'M.C.A',
      eligibility: 'Graduation',
      fees: '1.02 Lakhs (1st Year Fees)'
    },
    {
      name: 'M.Sc',
      eligibility: 'Graduation',
      fees: '59,500 (1st Year Fees)'
    },
    {
      name: 'B.Sc',
      eligibility: '10+2',
      fees: '49,500 (1st Year Fees)'
    },
    {
      name: 'M.Tech',
      eligibility: 'Graduation',
      fees: '1.16 Lakhs (1st Year Fees)'
    },
    {
      name: 'B.Tech (Lateral)',
      eligibility: '10+3',
      fees: '83,500 (1st Year Fees)'
    }
  ];

  return (
    <div className="courses-container">
      <table>
        <thead>
          <tr>
            <th>Courses</th>
            <th>Eligibility</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.eligibility}</td>
              <td>{course.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;