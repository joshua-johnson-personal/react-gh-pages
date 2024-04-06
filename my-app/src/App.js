import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {
  return (

<HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer />
</HashRouter>

  );
}

export default App;