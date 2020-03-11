import React from 'react';
import './styles.scss';

const EachStop = ({ stop }) => {
  return (
    <div className="each-stop-container">
      <div className="stop-name">{stop.name}</div>
    </div>
  );
};

export default EachStop;
