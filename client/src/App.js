import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor()
  {
    super();

    this.state = {
      data: 12
    }
  }

  getData() {

    fetch('api/foo', {
        method: 'post'
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({data: data.data});
      });
  }

  onTextChange(e)
  {
    this.setState({data: e.target.value});  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={e => this.getData()}>get data</button>
        <textarea name="" id="" cols="30" rows="10" onChange={this.onTextChange.bind(this)}
          value={this.state.data}>
          </textarea>
        </header>
      </div>
    );
  }
}

export default App;
