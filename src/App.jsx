import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Country from './pages/Country'
import Country_Region from './pages/Country_Region'
import HomePage from './pages/HomePage'
import Region from './pages/Region'
const App = () => {



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
