import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Country from './pages/Country'
import Country_Region from './pages/Country_Region'
import HomePage from './pages/HomePage'
import Region from './pages/Region'
const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://script.crazyegg.com/pages/scripts/0127/9523.js'; // replace XXXXX with your Crazy Egg ID
    script.async = false; // Load synchronously to prevent FOUC (flash of unstyled content)
    script.onload = () => {
      console.log('Crazy Egg script loaded');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Show a loading message or spinner
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:countryName' element={<Country />} />
            <Route path='/country-region' element={<Country_Region />} />
            <Route path='region/:regionName' element={<Region />} />
          </Routes>
        </Router>
  )}
    </div>
  )
}

export default App
