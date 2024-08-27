import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Overview from './pages/overview'
import Transaction from './pages/transaction'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  )
}

export default App
