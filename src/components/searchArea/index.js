import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import DonationPage from '../donation';

const SearchArea = () => {
  const stops = useSelector(state => state);
  const [searchText, setSearchtext] = useState('');
  const [selectedStop, setSelectedStop] = useState({});
  const [showSearch, setShowSearch] = useState(false);
  const [showDonationPage, setShowDonationPage] = useState(false);
  const randomIndex = Math.floor(Math.random() * 100) % stops.length;
  const onSuggestionItemClick = stop => {
    setSearchtext(stop.name);
    setShowSearch(false);
  };
  const getSuggestionList = () => {
    if (!searchText || !showSearch) return null;
    let filteredValue = stops.filter(s =>
      s.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredValue.map(v => (
      <div
        className="eachSuggetion"
        key={Math.floor(Math.random() * 100000)}
        onClick={() => {
          onSuggestionItemClick(v);
          setSelectedStop(v);
          setShowDonationPage(true);
        }}>
        {v.name}
      </div>
    ));
  };
  return (
    <div className={`container ${showDonationPage ? 'miniContainer' : ''}`}>
      <div
        className={`searchAreaContainer ${
          showDonationPage ? 'miniSearchArea' : ''
        }`}>
        <div className="title">Bus-stop crowdsourcing</div>
        <div className="searchHolder">
          <div className="searchBar">
            <input
              type="text"
              name="search"
              value={searchText}
              onChange={el => {
                setSearchtext(el.target.value);
                setShowSearch(true);
              }}
              placeholder={stops[randomIndex].name}
            />
            <div className="suggestionContainer">{getSuggestionList()}</div>
          </div>
        </div>
      </div>
      {showDonationPage && (
        <div className="donation">
          <DonationPage stop={selectedStop} />
        </div>
      )}
    </div>
  );
};

export default SearchArea;
