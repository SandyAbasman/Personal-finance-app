import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

defaults.plugins.legend.position = 'right'
defaults.plugins.legend.align = 'center'
defaults.plugins.legend.maxHeight = 10

export default function BudgetBox() {
  return (
    <div className="flex  w-full flex-col justify-between md:gap-6 gap-2  h-auto  bg-white  p-6 rounded-lg">
      <UpperBox title="Budgets" leftText="See Details" />
      <div className="size-80">
        <Doughnut
          data={{
            labels: data.budgets.map((name) => name.category),
            datasets: [
              {
                label: 'new',
                data: data.budgets.map((amount) => amount.maximum),
                backgroundColor: data.budgets.map((color) => color.theme),
              },
            ],
            hoverOffset: 4,
          }}
        ></Doughnut>
      </div>
    </div>
  )
}
