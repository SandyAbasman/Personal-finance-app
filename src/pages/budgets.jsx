import React from 'react'
import data from '../utilis/data.json'
import { defaults } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { HiPlus } from 'react-icons/hi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import dayjs from 'dayjs'

defaults.plugins.legend.display = false

export default function Budgets() {
  // Calculate spent amounts for each budget category
  const calculateSpent = (category) => {
    return Math.abs(
      data.transactions
        .filter((trans) => trans.category === category && trans.amount < 0)
        .reduce((sum, trans) => sum + trans.amount, 0)
    )
  }

  const budgetsWithSpent = data.budgets.map((budget) => ({
    ...budget,
    spent: calculateSpent(budget.category),
    percentage: (calculateSpent(budget.category) / budget.maximum) * 100,
  }))

  const totalSpent = budgetsWithSpent.reduce((sum, budget) => sum + budget.spent, 0)
  const totalBudget = budgetsWithSpent.reduce((sum, budget) => sum + budget.maximum, 0)

  // Get recent transactions for each budget category
  const getRecentTransactions = (category, limit = 3) => {
    return data.transactions
      .filter((trans) => trans.category === category && trans.amount < 0)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  }

  return (
    <div className="w-full h-auto flex flex-col gap-6 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-blue font-bold text-2xl md:text-3xl">Budgets</h2>
        <button className="flex items-center gap-2 bg-blue text-offWhite px-4 py-2 rounded-lg hover:bg-blue/90 transition-colors font-semibold text-sm">
          <HiPlus size={20} />
          Add New Budget
        </button>
      </div>

      <div className="w-full bg-white p-6 rounded-lg">
        {/* Top Section - Chart and Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-4 mb-6">
          <div className="w-full md:w-[50%] h-full relative max-w-xs mx-auto md:max-w-none">
            <Doughnut
              data={{
                labels: budgetsWithSpent.map((budget) => budget.category),
                datasets: [
                  {
                    data: budgetsWithSpent.map((budget) => budget.maximum),
                    backgroundColor: budgetsWithSpent.map((budget) => budget.theme),
                    borderColor: budgetsWithSpent.map((budget) => budget.theme),
                  },
                ],
                hoverOffset: 4,
              }}
            ></Doughnut>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue">${totalSpent.toFixed(0)}</p>
              <p className="text-xs text-blue/50">of {totalBudget.toFixed(0)} total</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-4">
            {budgetsWithSpent.map((budget) => {
              return (
                <div
                  key={budget.category}
                  style={{ borderColor: budget.theme }}
                  className="flex flex-col gap-2 pl-4 border-l-4 py-2"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-blue/70 text-sm font-semibold">{budget.category}</p>
                    {/* <p className={`text-xs font-bold ${isOverBudget ? 'text-red-600' : 'text-blue'}`}>
                      ${budget.spent.toFixed(2)} / ${budget.maximum.toFixed(2)}
                    </p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section - Individual Budget Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetsWithSpent.map((budget) => {
            // const isOverBudget = budget.spent > budget.maximum
            const remaining = Math.max(0, budget.maximum - budget.spent)
            const recentTransactions = getRecentTransactions(budget.category, 3)

            return (
              <div
                key={budget.category}
                className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-background"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      style={{ backgroundColor: budget.theme }}
                      className="w-3 h-3 rounded-full"
                    ></div>
                    <p className="text-blue font-semibold text-base">{budget.category}</p>
                  </div>
                  <button className="text-blue/50 hover:text-blue transition-colors">
                    <HiOutlineDotsHorizontal size={20} />
                  </button>
                </div>

                {/* Budget Limit */}
                <p className="text-blue/50 text-sm">Maximum of ${budget.maximum.toFixed(2)}</p>

                {/* Progress Bar */}
                <div className="w-full bg-background rounded-full h-3 relative overflow-hidden">
                  <div
                    style={{
                      backgroundColor: budget.theme,
                      width: `${Math.min(budget.percentage, 100)}%`,
                    }}
                    className="h-3 rounded-full transition-all absolute left-0"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-between px-3 text-xs text-blue font-semibold">
                    <span>Spent ${budget.spent.toFixed(2)}</span>
                    <span>Remaining ${remaining.toFixed(2)}</span>
                  </div>
                </div>

                {/* Latest Spending */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-blue font-semibold text-sm">Latest Spending</p>
                    <button className="text-blue/50 hover:text-blue text-xs font-semibold transition-colors">
                      See all
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {recentTransactions.length > 0 ? (
                      recentTransactions.map((trans, index) => (
                        <div
                          key={`${trans.name}-${trans.date}-${index}`}
                          className="flex justify-between items-center gap-3 p-2 hover:bg-background rounded-lg transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <img
                              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                              src={trans.avatar}
                              alt={trans.name}
                            />
                            <p className="text-sm text-blue font-semibold truncate">{trans.name}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <p className="text-sm font-bold text-blue">
                              -${Math.abs(trans.amount).toFixed(2)}
                            </p>
                            <p className="text-xs text-blue/50">
                              {dayjs(trans.date).format('DD MMM, YYYY')}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-blue/50 text-sm text-center py-2">No transactions yet</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
