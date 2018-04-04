import React, { Component } from 'react';
import head from '../../assets/head.png';
import text from '../../assets/text.png';
import '../../css/App.css';
import TicketForm from '../components/TicketForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="backsuite airlines head logo" className="backsuite-head"src="https://i.imgur.com/ZcrY3Si.png" />
          <img alt="backsuite airlines header text" className="backsuite-text"src="https://i.imgur.com/nB1SWHd.png" />
        </div>
        <TicketForm />
        <div className="App-footer">
          <p className="footer-text">Copyright 2018 Backsuite Airlines. Additional services for those who need them may be requested. Backsuite air is not liable for delays in flight. Be prepared for a security screening at the door. Don't pregame you crazy kid</p>
        </div>
      </div>
    );
  }
}

export default App;