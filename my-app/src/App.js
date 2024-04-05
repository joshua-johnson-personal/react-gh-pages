import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
        <Routes>
          <Route path="/" element={ <HomePage />}></Route>
          <Route path="/about" element={ <AboutPage />}></Route>
          <Route path="/contact" element={ <ContactPage />}></Route>
        </Routes>
      </div>

  );
}

export default App;