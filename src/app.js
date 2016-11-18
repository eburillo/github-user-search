import React, { Component } from 'react';
import SearchFormContainer from './components/containers/search-form-container.js';
import MessengerContainer from './components/containers/messenger-container.js';
import ListContainer from './components/containers/list-container.js';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Github User Search</h2>
        </div>
        <div className="app-content">
          <SearchFormContainer></SearchFormContainer>
          <MessengerContainer></MessengerContainer>
          <ListContainer></ListContainer>
        </div>
      </div>
    );
  }
}

export default App;
