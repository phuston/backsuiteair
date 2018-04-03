import React, { Component } from 'react';
import head from './assets/head.png';
import text from './assets/text.png';
import './App.css';
import TicketForm from './components/TicketForm';
import JetBlue from './components/JetBlue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="backsuite-head"src={head} />
          <img className="backsuite-text"src={text} />
        </div>
        <TicketForm />
        {/* <JetBlue /> */}
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export default App;