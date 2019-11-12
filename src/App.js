import React from 'react';
import MainPage from './pages/Main';
import {HashRouter} from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <HashRouter>
        <MainPage />
      </HashRouter>
    </div>
  );
}

export default App;
