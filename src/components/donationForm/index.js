import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import { makeDonation as mdAction } from '../../redux/actions/donations';

const DonationForm = ({ stop }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [credit, setCredit] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [creditError, setCreditError] = useState(false);
  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const dispatch = useDispatch();

  const makeDonation = e => {
    // if (e.preventDefault) {
    e.preventDefault();
    // }
    let errors = false;
    if (!name) {
      errors = true;
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!credit) {
      errors = true;
      setCreditError(true);
    } else {
      setCreditError(false);
    }
    if (!amount) {
      errors = true;
      setAmountError(true);
    } else {
      setAmountError(false);
    }
    if (email && !validateEmail(email)) {
      errors = true;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (errors) return;
    const payload = {
      id: stop.id,
      name,
      amount,
      email,
      credit
    };
    dispatch(mdAction(payload));
    console.log(name, email, credit);
  };

  return (
    <div className="donationFormContainer">
      <form className="donationForm">
        <div className={`formInput ${nameError ? 'error' : ''}`}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={el => setName(el.target.value)}
            required
          />
        </div>
        <div className={`formInput ${emailError ? 'error' : ''}`}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={el => setEmail(el.target.value)}
            placeholder="Email (Optional)"
          />
        </div>
        <div className={`formInput ${amountError ? 'error' : ''}`}>
          <input
            type="number"
            min="0"
            name="amount"
            value={amount}
            onChange={el => setAmount(el.target.value)}
            required
            placeholder="Amount"
          />
        </div>

        <div className={`formInput ${creditError ? 'error' : ''}`}>
          <input
            type="number"
            name="credit"
            value={credit}
            onChange={el => setCredit(el.target.value)}
            required
            placeholder="Credit/Debit Card Number"
          />
        </div>
        <div className="action">
          <button onClick={makeDonation}>Donate</button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
