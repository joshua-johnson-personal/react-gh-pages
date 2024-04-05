import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
const router = createBrowserRouter([{ path: "/", element: <div>Test page</div> }]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>
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