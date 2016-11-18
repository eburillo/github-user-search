import {createStore} from 'redux';
import ReposReducer from '../reducers/repos-reducer.js';

const store = createStore(ReposReducer);

export default store;
