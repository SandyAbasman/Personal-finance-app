import React, { useState } from 'react'
import data from '../utilis/data.json'
import dayjs from 'dayjs'

export default function RecurringBills() {
  const [filter, setFilter] = useState('all') // 'all', 'paid', 'due'

  const recurringBills = data.transactions.filter((trans) => trans.recurring)

  // Group by category and calculate totals
  const billsByCategory = recurringBills.reduce((acc, bill) => {
    if (!acc[bill.category]) {
      acc[bill.category] = {
        category: bill.category,
        total: 0,
        count: 0,
        lastDate: bill.date,
      }
    }
    acc[bill.category].total += Math.abs(bill.amount)
    acc[bill.category].count += 1
    if (new Date(bill.date) > new Date(acc[bill.category].lastDate)) {
      acc[bill.category].lastDate = bill.date
    }
    return acc
  }, {})

  const billsList = Object.values(billsByCategory)

  return (
    <div className="w-full h-auto flex flex-col gap-6 p-4 md:p-6">
      <h2 className="text-blue font-bold text-2xl md:text-3xl">Recurring Bills</h2>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            filter === 'all' ? 'bg-blue text-offWhite' : 'bg-white text-blue hover:bg-background'
          }`}
        >
          All Bills
        </button>
        <button
          onClick={() => setFilter('paid')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            filter === 'paid' ? 'bg-blue text-offWhite' : 'bg-white text-blue hover:bg-background'
          }`}
        >
          Paid
        </button>
        <button
          onClick={() => setFilter('due')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            filter === 'due' ? 'bg-blue text-offWhite' : 'bg-white text-blue hover:bg-background'
          }`}
        >
          Due
        </button>
      </div>

      <div className="w-full bg-white p-6 rounded-lg">
        <div className="flex flex-col gap-3">
          {billsList.length > 0 ? (
            billsList.map((bill) => {
              return (
                <div
                  key={bill.category}
                  className="flex justify-between items-center gap-4 border-l-4 border-green p-4 rounded-lg flex-row bg-background hover:bg-background/80 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-blue/80 font-semibold">{bill.category}</p>
                    <p className="text-xs text-blue/50">
                      Last paid: {dayjs(bill.lastDate).format('DD MMM YYYY')}
                    </p>
                    <p className="text-xs text-blue/50">{bill.count} transaction(s)</p>
                  </div>

                  <div className="flex flex-col justify-start items-end gap-1">
                    <p className="text-sm font-bold text-blue">${bill.total.toFixed(2)}</p>
                    <span className="text-xs text-green font-semibold">Recurring</span>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-blue/50 text-sm text-center py-8">No recurring bills found</p>
          )}
        </div>
      </div>

      <div className="w-full bg-white p-6 rounded-lg">
        <h3 className="text-blue font-bold text-lg mb-4">Recent Recurring Transactions</h3>
        <div className="flex flex-col gap-3">
          {recurringBills
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 10)
            .map((trans) => {
              return (
                <div
                  key={`${trans.name}-${trans.date}`}
                  className="flex justify-between items-center gap-4 p-3 flex-row hover:bg-background rounded-lg transition-colors"
                >
                  <div className="flex flex-row justify-start gap-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={trans.avatar}
                      alt={trans.name}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-blue font-semibold">{trans.name}</p>
                      <p className="text-xs text-blue/50">{trans.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-start items-end gap-1">
                    <p className="text-sm font-bold text-blue">
                      ${Math.abs(trans.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-blue/50">
                      {dayjs(trans.date).format('DD MMM YYYY')}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
