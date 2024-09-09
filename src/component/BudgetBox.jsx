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
    <div className="flex w-full flex-col justify-between md:gap-2 gap-2  bg-white  p-6 rounded-lg">
      <UpperBox title="Budgets" leftText="See Details" />
      <div className=" w-[60%] h-full  gap-4 flex flex-row justify-between items-center p-2">
        <Doughnut
          data={{
            labels: data.budgets.map((name) => name.category),
            datasets: [
              {
                label: 'new',
                data: data.budgets.map((amount) => amount.maximum),
                backgroundColor: data.budgets.map((color) => color.theme),
                borderColor: data.budgets.map((color) => color.theme),
              },
            ],
            hoverOffset: 4,
          }}
        ></Doughnut>

        <div className="  flex flex-col gap-4 p-2 ">
          {data.budgets.slice(0, 5).map((legend) => {
            return (
              <div
                key={legend.name}
                style={{ borderColor: legend.theme }}
                className={`flex flex-col pl-2 justify-between item-start gap-1 border-l-4   `}
              >
                <p className="text-blue/60 text-nowrap text-xs font-semibold  ">
                  {legend.category}
                </p>
                <p className="font-extrabold text-xs  text-blue">${legend.maximum}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
