import { createStore } from 'redux';
import donations from './reducers/donations';
const store = createStore(donations);
export default store;
