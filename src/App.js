import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes';

function App() {
  return (
    <div className="App">
      <NavBar />   
      <main>
        <h1>Bassoon Finger Trainer</h1>
        <Routes />
      </main>  
    </div>
  );
}

export default withRouter(App);
