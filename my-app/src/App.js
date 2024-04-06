import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {
  return (

<HashRouter>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>

</HashRouter>

  );
}

export default App;