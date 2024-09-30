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
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-lg bg-white p-6 md:gap-2">
      <UpperBox title="Budgets" leftText="See Details" />

      <div className="flex flex-row items-center justify-between gap-10 px-10 py-4">
        <div className="h-full w-[70%]">
          <Doughnut
            data={{
              labels: data.budgets.map((name) => name.category),
              datasets: [
                {
                  data: data.budgets.map((amount) => amount.maximum),
                  backgroundColor: data.budgets.map((color) => color.theme),
                  borderColor: data.budgets.map((color) => color.theme),
                },
              ],
              hoverOffset: 4,
            }}
          ></Doughnut>
        </div>
        <div className="flex w-1/2 flex-col gap-4 p-2">
          {data.budgets.slice(0, 5).map((legend) => {
            return (
              <div
                key={legend.name}
                style={{ borderColor: legend.theme }}
                className={`item-start flex flex-col justify-between gap-1 border-l-4 pl-2`}
              >
                <p className="text-nowrap text-xs font-semibold text-blue/60">{legend.category}</p>
                <p className="text-xs font-extrabold text-blue">${legend.maximum}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
