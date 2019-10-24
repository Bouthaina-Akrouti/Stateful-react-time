import React from 'react';
import './App.css';
import Time from './Time'

const ms=35145698547
function App() {
  return (
    <div className="App">
      <Time milliseconds={ms} />
    </div>
  );
}

export default App;
