import * as actionTypes from './types';

export const getBusStops = () => ({
  type: actionTypes.GET_BUS_STOPS
});

export const makeDonation = payload => ({
  type: actionTypes.MAKE_DONATION,
  payload
});
