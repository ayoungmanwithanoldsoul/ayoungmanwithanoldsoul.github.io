import React from 'react';
import '../../styles/CircularProgressBar.css';

const CircularProgressBar = ({ percentage, title }) => {
    // Ensure percentage is between 0 and 100
    const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
    
    // Calculate rotation for the progress
    const rotationDegree = (normalizedPercentage / 100) * 360;
  
    return (
      <div className="circular-progress">
        <div className="circle">
          <div 
            className="progress"
            style={{ transform: `rotate(${rotationDegree}deg)` }} // Rotate the progress based on percentage
          ></div>
          <div className="inside-circle">
            {normalizedPercentage}%
          </div>
        </div>
        <h5>{title}</h5>
      </div>
    );
  };
  
  export default CircularProgressBar;