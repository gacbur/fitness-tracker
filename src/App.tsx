import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './layouts/navbar/Navbar'
import Main from './layouts/main/Main'

import ScrollToTop from './components/scrollToTop/ScrollToTop';


import './App.css';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <div className="app__wrapper">
          <Navbar />
          <Main />
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
