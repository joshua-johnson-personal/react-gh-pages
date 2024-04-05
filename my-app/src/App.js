import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecondPage from './SecondPage';
import HomePage from './HomePage'; // Assuming you already have a HomePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/second" component={SecondPage} />
      </Routes>
    </Router>
  );
}

export default App;