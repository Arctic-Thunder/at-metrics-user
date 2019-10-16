import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import MainPage from './pages/Main'
import {
  BrowserRouter,
 } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>      
    </div>
  );
}

export default App;
