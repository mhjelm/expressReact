import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getData() {
    console.log(33);

    fetch('api/foo', {
        method: 'post'
      })
      .then(resp => resp.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={e => this.getData()}>get data</button>
        </header>
      </div>
    );
  }
}

export default App;
