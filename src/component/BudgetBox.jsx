import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

// const legendStyle={
//   size:{width: '550', height: '100'}
// 		  };

defaults.plugins.legend.display = false

export default function BudgetBox() {
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
  }))

  const totalSpent = budgetsWithSpent.reduce((sum, budget) => sum + budget.spent, 0)
  const totalBudget = budgetsWithSpent.reduce((sum, budget) => sum + budget.maximum, 0)

  return (
    <div className="flex w-full flex-col justify-between md:gap-4 gap-4 bg-white p-6 rounded-lg">
      <UpperBox title="Budgets" leftText="See Details" />

      <div className="gap-6 flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-10">
        <div className="w-full md:w-[60%] lg:w-[70%] h-full relative max-w-xs mx-auto md:max-w-none">
          <Doughnut
            data={{
              labels: budgetsWithSpent.map((name) => name.category),
              datasets: [
                {
                  data: budgetsWithSpent.map((amount) => amount.maximum),
                  backgroundColor: budgetsWithSpent.map((color) => color.theme),
                  borderColor: budgetsWithSpent.map((color) => color.theme),
                },
              ],
              hoverOffset: 4,
            }}
          ></Doughnut>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-blue">${totalSpent.toFixed(0)}</p>
            <p className="text-xs text-blue/50">of ${totalBudget.toFixed(0)} limit</p>
          </div>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col gap-3 p-2">
          {budgetsWithSpent.slice(0, 5).map((legend) => {
            return (
              <div
                key={legend.category}
                style={{ borderColor: legend.theme }}
                className="flex flex-col pl-3 justify-between item-start gap-1 border-l-4 py-1"
              >
                <p className="text-blue/60 text-nowrap text-xs font-semibold">{legend.category}</p>
                <p className="font-extrabold text-xs text-blue">${legend.maximum}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
