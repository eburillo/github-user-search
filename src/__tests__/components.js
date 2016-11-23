import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

    let tree = renderer.create(
      <List repos={list}>
      </List>
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders a message in Messeger component', () => {
    let message = "This is a testing message.";
    let tree = renderer.create(
      <Messenger message={message}>
      </Messenger>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an item in Repo component', () => {
    let repo = {
      "name": "atomic-design",
      "description": "The repository for the Atomic Design book",
      "html_url": "https://github.com/bradfrost/atomic-design"
    };
    let tree = renderer.create(
      <Repo name={repo.name} url={repo.html_url} desc={repo.description}>
      </Repo>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
