import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <React.StrictMode>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>

      </React.StrictMode>
  );
}

export default App;