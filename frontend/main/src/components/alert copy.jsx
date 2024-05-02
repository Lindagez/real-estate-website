import React, { useState, useEffect } from 'react';
import './alert.css';

export const Alert = props => {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    let countdownInterval;

    if (isVisible) {
      countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
        } else {
          setIsVisible(false);
          clearInterval(countdownInterval);
        }
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [isVisible, remainingTime]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Return null if the alert is not visible
  }

  return (
    <div className={`alert ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='close-button' onClick={handleClose}>
        X
      </div>
      <div className='alert-content'>
        {props.message}
        <div
          className='countdown-bar'
          style={{ width: `${(remainingTime / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
