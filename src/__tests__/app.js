import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../stores/store.js';
import App from '../app';

describe('Render App', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
    		<App />
    	</Provider>, div);
  });
});
