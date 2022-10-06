import React, { Component } from 'react';
import './App.css';
import Greet from './components/funcComponets';
import Come from './components/classComponet'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Come />
      </div>
    );
  }
}



export default App;
