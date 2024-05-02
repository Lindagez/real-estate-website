import React, { useState, useEffect } from 'react';
import './alert.css';

export const Alert = props => {
  const [visible, setVisibility] = useState(true);

  const alertBox = () => (
    <div>
      <input type='checkbox' id='alert-toggle' />
      <div class='alert-container'>
        <div class='alert-header'>
          <label for='alert-toggle' class='close-button'>
            &#10006;
          </label>
        </div>
        {props.message}
        <div class='countdown-bar'></div>
      </div>
    </div>
  );

  return <>{visible && alertBox()}</>;
};
