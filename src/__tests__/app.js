import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../stores/store.js';
import App from '../app';

describe('Render App', function() {
  it('renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
    		<App />
    	</Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
