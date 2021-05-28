import React from 'react';
import './App.css';
import Landing from './Landing';
import Dashboard from './Dashboard';
import {user} from '../firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {user ? <Dashboard/> : <Landing/>}
        </section>
      </header>
    </div>
  );
}


export default App;
