// Dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import Home from '../pages';
// Assets
import '../assets/styles/App.scss'

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
};

export default App;
