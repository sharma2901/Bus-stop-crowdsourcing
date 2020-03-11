import React from 'react';
import './styles.scss';

const TargetForm = ({ stop }) => {
  return (
    <div className="targetContainer">
      <div className="part target">
        <div className="label">Target</div>
        <div className="amount">SGD 700</div>
      </div>
      <div className="part donated">
        <div className="label">Donation Made</div>
        <div className="amount">{`SGD ${stop.totalDonation || 0}`}</div>
      </div>
    </div>
  );
};

export default TargetForm;
