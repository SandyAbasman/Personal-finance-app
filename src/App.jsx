import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Overview from './pages/overview'
import Transaction from './pages/transaction'
import Budgets from './pages/budgets'
import Pots from './pages/pots'
import RecurringBills from './pages/recurringBills'
import Sidebar from './component/Sidebar'

function App() {
  return (
    <div className=" w-screen h-screen flex flex-row bg-background">
      <div>
        <Sidebar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurringBills" element={<RecurringBills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
