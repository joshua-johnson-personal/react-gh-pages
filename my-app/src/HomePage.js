// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to="/second">Go to Second Page</Link>
    </div>
  );
}

export default HomePage;
