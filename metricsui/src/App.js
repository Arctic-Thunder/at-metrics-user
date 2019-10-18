import React from 'react';
import './App.css';
import MainPage from './pages/Main'
import {
  BrowserRouter,
 } from 'react-router-dom'

const data = {
  user: {
    username: 'thally',
    email: 'thally@etsu.edu',
    token: 'd89e480b2a91b2f1a8c7918ebca4738c61ba3171'
  },
  projects: [],
  metrics: []
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage data={data}/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
