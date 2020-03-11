import * as actionTypes from '../actions/types';

const initialState = [
  {
    id: 0,
    name: 'Ang Mo Kio Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 1,
    name: 'Bedok Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 2,
    name: 'Bishan Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 3,
    name: 'Boon Lay Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 4,
    name: 'Bukit Batok Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 5,
    name: 'Bukit Merah Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 6,
    name: 'Bukit Panjang Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 7,
    name: 'Choa Chu Kang Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 8,
    name: 'Clementi Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 9,
    name: 'Compassvale Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 10,
    name: 'Eunos Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 11,
    name: 'HarbourFront Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 12,
    name: 'Hougang Central Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 13,
    name: 'Joo Koon Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 14,
    name: 'Jurong East Temporary Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 15,
    name: 'Pasir Ris Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 16,
    name: 'Punggol Temporary Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 17,
    name: 'Sembawang Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 18,
    name: 'Sengkang Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 19,
    name: 'Serangoon Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 20,
    name: 'Tampines Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 21,
    name: 'Tampines Concourse Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 22,
    name: 'Toa Payoh Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 23,
    name: 'Woodlands Temporary Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 24,
    name: 'Yio Chu Kang Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  },
  {
    id: 25,
    name: 'Yishun Bus Interchange',
    target: 700,
    totalDonation: 0,
    donations: []
  }
];

let storedState = localStorage.getItem('store');
if (!storedState) {
  storedState = initialState;
} else {
  storedState = JSON.parse(storedState);
}
export default (state = storedState, action) => {
  const payload = action.payload;
  const type = action.type;
  switch (type) {
    case actionTypes.GET_BUS_STOPS:
      return state;
    case actionTypes.MAKE_DONATION:
      let stop = {};
      const rest = [];
      state.forEach(s => {
        if (s.id === payload.id) stop = s;
        rest.push(s);
      });
      stop.totalDonation = +stop.totalDonation + +payload.amount;
      stop.donations.push(payload);
      localStorage.setItem('store', JSON.stringify(rest));
      return rest;
    default:
      return state;
  }
};
