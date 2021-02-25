import React, { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'

import Sidedrawer from './components/sidedrawer/Sidedrawer'
import Backdrop from './components/backdrop/Backdrop'

import './App.css';

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <div className="app">
        <div className="app__wrapper">
          <Navbar hide_menu={setSideToggle} />
          <Sidedrawer show={sideToggle} hide_menu={setSideToggle} />
          <Backdrop show={sideToggle} hide_menu={setSideToggle} />
          <Main />
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
