import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <HomePage />}></Route>
          <Route path="/about" element={ <AboutPage />}></Route>
          <Route path="/contact" element={ <ContactPage />}></Route>
        </Routes>
    </div>

  );
}

export default App;