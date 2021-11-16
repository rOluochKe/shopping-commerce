import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
    </Routes>
  )
}

export default App
