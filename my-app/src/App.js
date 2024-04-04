import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ESO Build Repository</h1>
        <p>Discover and share your best Elder Scrolls Online builds!</p>
        <a
          className="App-link"
          href="https://www.elderscrollsonline.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about ESO
        </a>
      </header>
      <section className="Builds-section">
        <h2>Popular Builds</h2>
        <div className="Builds-container">
          {/* Display popular ESO builds here */}
          <div className="Build-card">
            <h3>Oakensoul Warden Healer</h3>
            <img src="artwork/Warden_Healer.jpg" alt="Oakensoul Warden Healer" />
            <p>A Cracked 1-Bar Warden Healer.</p>
            <a href="https://en.uesp.net/wiki/Special:EsoBuildData?id=614878">View Build</a>
          </div>
          <div className="Build-card">
            <h3>Stamina Nightblade</h3>
            <p>A stealthy assassin build for Nightblade class focused on stamina.</p>
            <a href="/stamina-nightblade">View Build</a>
          </div>
          {/* Add more build cards as needed */}
        </div>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 ESO Build Repository. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;