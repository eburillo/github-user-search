import React from 'react';
import ReactDOM from 'react-dom';
import {List} from '../components/presentational/list.js';
import {Messenger} from '../components/presentational/messenger.js';
import {Repo} from '../components/presentational/repo.js';

describe('Render Presentational components', function() {
  it('renders a list in List component', () => {
    const list = [
          {
            "name": "atomic-design",
            "description": "The repository for the Atomic Design book",
            "html_url": "https://github.com/bradfrost/atomic-design"
          }
        ];

    const div = document.createElement('div');
    ReactDOM.render(
      <List repos={list}>
      </List>, div);
  });

  it('renders a message in Messeger component', () => {
    const message = "This is a testing message.";
    const div = document.createElement('div');
    ReactDOM.render(
      <Messenger message={message}>
      </Messenger>, div);
  });

  it('renders an item in Repo component', () => {
    const repo = {
      "name": "atomic-design",
      "description": "The repository for the Atomic Design book",
      "html_url": "https://github.com/bradfrost/atomic-design"
    };
    const div = document.createElement('div');
    ReactDOM.render(
      <Repo name={repo.name} url={repo.html_url} desc={repo.description}>
      </Repo>, div);
  });
});
