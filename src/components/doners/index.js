import React from 'react';
import './styles.scss';

const Doners = ({ stop }) => {
  if (!stop.donations.length) return null;
  const getDonersList = () => {
    return stop.donations.map((d, i) => (
      <div className="doner" key={i}>
        <div className="name">{d.name}</div>
        <div className="amount">{`SGD ${d.amount}`}</div>
      </div>
    ));
  };
  return (
    <div className="donerList">
      <div className="label">Doners</div>
      <div className="list">{getDonersList()}</div>
    </div>
  );
};

export default Doners;
