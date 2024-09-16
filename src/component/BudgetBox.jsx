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
    <div className=" h-auto flex w-full flex-col justify-between gap-250  bg-white  items-start self-stretch flex-1 p-400 rounded-lg">
      <UpperBox title="Budgets" leftText="See Details" />

      <div className="gap-[0.8rem] flex-1 flex md:flex-row flex-col justify-center md:justify-between items-center  self-stretch ">
        <div className=" md:w-[60%] md:h-auto w-[150px] h-[150px] flex flex-col gap-[0.5rem] items-center self-stretch justify-center flex-shrink-0  ">
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
        <div className=" md:flex md:flex-col grid gap-200 md:item-start    md:justify-center w-full h-auto  grid-cols-2  ">
          {data.budgets.slice(0, 5).map((legend) => {
            return (
              <div
                key={legend.name}
                style={{ borderColor: legend.theme }}
                className={`flex flex-col  justify-center item-center gap-50 pl-150 border-l-[4px]   `}
              >
                <p className="text-grey-300 text-nowrap text-[11px] font-[400]  ">
                  {legend.category}
                </p>
                <p className="font-[700] text-[12px]  text-grey-900">${legend.maximum}.00</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
