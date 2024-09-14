import React, { useState, useEffect } from 'react';
import PortfolioTracker from './components/PortfolioTracker';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1 className='title'>Crypto Portfolio Tracker(Top 20 by Market Cap)</h1>
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <PortfolioTracker />
      )}
      <footer className='footer'>
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
