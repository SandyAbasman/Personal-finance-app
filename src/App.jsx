import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Overview from './pages/overview'
import Transaction from './pages/transaction'
import Budgets from './pages/budgets'
import Pots from './pages/pots'
import RecurringBills from './pages/recurringBills'
import Sidebar from './component/Sidebar'
import BottomNav from './component/BottomNav'
import ErrorPage from './pages/404'

function App() {
  return (
    <div className="w-screen h-screen flex bg-background justify-start flex-row overflow-hidden">
      <div className="h-full hidden md:block overflow-hidden">
        <Sidebar />
      </div>

      <div className="w-full p-2 md:p-2 pb-20 md:pb-2 h-full overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurringBills" element={<RecurringBills />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <BottomNav />
    </div>
  )
}

export default App
