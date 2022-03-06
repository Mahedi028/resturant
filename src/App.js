import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <MainComponent/>
    </BrowserRouter>
    </div>
  );
}

export default App;
