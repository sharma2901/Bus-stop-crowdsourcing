import React from 'react';
import './styles.scss';
import DonationForm from '../donationForm';
import TargetForm from '../targetForm';
import Doners from '../doners';

const DonationPage = ({ stop }) => {
  return (
    <div className="donationContainer">
      <div className="form">
        <DonationForm stop={stop} />
        <TargetForm stop={stop} />
      </div>
      <div>
        <Doners stop={stop} />
      </div>
    </div>
  );
};

export default DonationPage;
