import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Overview from './pages/overview'
import Transaction from './pages/transaction'
import Budgets from './pages/budgets'
import Pots from './pages/pots'
import RecurringBills from './pages/recurringBills'
import Sidebar from './component/Sidebar'
import ErrorPage from './pages/404'

function App() {
  return (
    <div className=" w-screen h-screen flex   bg-background justify-start  flex-row">
      <div className=" h-auto  hidden md:block">
        <Sidebar />
      </div>

      <div className=" w-full  p-2 h-auto">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurringBills" element={<RecurringBills />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
