import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Country from './pages/Country'
import Country_Region from './pages/Country_Region'
import HomePage from './pages/HomePage'
import Region from './pages/Region'
const App = () => {

  useEffect(() => {
    const handlePageLoad = () => {
      const script = document.createElement('script');
      script.src = 'https://script.crazyegg.com/pages/scripts/0127/9523.js'; 
      script.async = true;
      document.body.appendChild(script);
    };
  
    window.addEventListener('load', handlePageLoad);
  
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
  
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:countryName' element={<Country />} />
            <Route path='/country-region' element={<Country_Region />} />
            <Route path='region/:regionName' element={<Region />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
