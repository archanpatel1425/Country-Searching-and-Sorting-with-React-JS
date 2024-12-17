import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Country from './pages/Country'
import Region from './pages/Region'
import Country_Region from './pages/Country_Region'
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
