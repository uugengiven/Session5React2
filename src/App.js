import React, { Component } from 'react';
import './App.css';
import Colorbox from './Colorbox'

class App extends Component {
  render() {
    let myArray = Array(30).fill(<Colorbox />);

    return (
      <div>
        {myArray}
      </div>
    );
  }
}

export default App;
