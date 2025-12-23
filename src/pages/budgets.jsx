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
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Section - Chart and Summary */}
          <div className="w-full lg:w-[40%] flex flex-col md:flex-row lg:flex-col gap-6 flex-shrink-0">
            <div className="w-full md:w-1/2 lg:w-full h-full relative max-w-xs mx-auto md:mx-0 lg:mx-auto lg:max-w-none flex items-center justify-center">
              <Doughnut
                data={{
                  labels: budgetsWithSpent.map((budget) => budget.category),
                  datasets: [
                    {
                      data: budgetsWithSpent.map((budget) => budget.maximum),
                      backgroundColor: budgetsWithSpent.map((budget) => budget.theme),
                      borderColor: budgetsWithSpent.map((budget) => budget.theme),
                      borderWidth: 0,
                      hoverOffset: 4,
                    },
                  ],
                }}
                options={{
                  cutout: '60%',
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function (context) {
                          const label = context.label || ''
                          const value = context.parsed || 0
                          const budget = budgetsWithSpent[context.dataIndex]
                          return `${label}: $${value.toFixed(2)} (Spent: $${budget.spent.toFixed(2)})`
                        },
                      },
                    },
                  },
                  maintainAspectRatio: true,
                  responsive: true,
                  animation: {
                    animateRotate: true,
                    animateScale: false,
                  },
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <p className="text-2xl font-bold text-blue leading-tight">
                  ${totalSpent.toFixed(0)}
                </p>
                <p className="text-xs text-blue/50 leading-tight">
                  of ${totalBudget.toFixed(0)} limit
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full flex flex-col gap-4">
              <p className="text-blue font-semibold text-sm">Spending Summary</p>
              {budgetsWithSpent.map((budget) => {
                const isOverBudget = budget.spent > budget.maximum
                return (
                  <div
                    key={budget.category}
                    style={{ borderColor: budget.theme }}
                    className="flex flex-col gap-2 pl-4 border-l-4 py-2"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-blue/70 text-sm font-semibold">{budget.category}</p>
                      <p
                        className={`text-xs font-bold ${isOverBudget ? 'text-red-600' : 'text-blue'}`}
                      >
                        ${budget.spent.toFixed(2)} of ${budget.maximum.toFixed(2)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Section - Individual Budget Cards */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4 flex-shrink-0">
            {budgetsWithSpent.map((budget) => {
              const remaining = Math.max(0, budget.maximum - budget.spent)
              const recentTransactions = getRecentTransactions(budget.category, 3)

              return (
                <div
                  key={budget.category}
                  className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm"
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
                  <div className="w-full bg-gray-50 rounded-full h-6 relative overflow-hidden">
                    <div
                      style={{
                        backgroundColor: budget.theme,
                        width: `${Math.min(budget.percentage, 100)}%`,
                      }}
                      className="h-6 rounded-full transition-all absolute left-0"
                    ></div>
                  </div>

                  {/* Spent and Remaining Labels */}
                  <div className="flex bg-white rounded-lg  ">
                    <div className="flex flex-col pl-4 py-3 flex-1 relative">
                      <div
                        style={{ backgroundColor: budget.theme }}
                        className="absolute left-0 top-0 bottom-0 w-1   rounded-l-lg"
                      ></div>
                      <p className="text-gray-500 text-xs mb-1">Spent</p>
                      <p className="text-blue font-bold text-sm">
                        $
                        {budget.spent % 1 === 0 ? budget.spent.toFixed(0) : budget.spent.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-1 mx-4 bg-gray-200"></div>
                    <div className="flex flex-col pr-4 py-3 flex-1">
                      <p className="text-gray-500 text-xs mb-1">Remaining</p>
                      <p className="text-blue font-bold text-sm">
                        ${remaining % 1 === 0 ? remaining.toFixed(0) : remaining.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-gray-200"></div>

                  {/* Latest Spending */}
                  <div className="flex bg-background rounded-xl p-5 flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <p className="text-blue font-semibold text-sm">Latest Spending</p>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-blue text-xs font-semibold transition-colors">
                        See All
                        <span className="text-gray-600">▸</span>
                      </button>
                    </div>
                    <div className="flex flex-col">
                      {recentTransactions.length > 0 ? (
                        recentTransactions.map((trans, index) => (
                          <div key={`${trans.name}-${trans.date}-${index}`}>
                            <div className="flex justify-between items-center gap-3 py-2">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <img
                                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                                  src={trans.avatar}
                                  alt={trans.name}
                                />
                                <p className="text-sm text-blue font-semibold truncate">
                                  {trans.name}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                <p className="text-sm font-bold text-blue">
                                  -${Math.abs(trans.amount).toFixed(2)}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {dayjs(trans.date).format('DD MMM YYYY')}
                                </p>
                              </div>
                            </div>
                            {index < recentTransactions.length - 1 && (
                              <div className="border-t border-gray-200 my-1"></div>
                            )}
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
    </div>
  )
}
