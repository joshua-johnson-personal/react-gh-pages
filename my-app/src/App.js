import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <App />
    </BrowserRouter>
 );
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