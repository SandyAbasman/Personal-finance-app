import React from 'react'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import UpperBox from './UpperBox'

export default function Pot() {
  return (
    <div className="flex h-auto w-full flex-col justify-between gap-2 rounded-lg bg-white p-6 md:gap-6">
      <UpperBox title="Pot" leftText="See Details" />
      <div className="flex h-auto w-full flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex h-auto w-full flex-row items-center justify-start gap-4 rounded-lg bg-background p-2 py-6 md:w-2/5">
          <i className="text-green">
            <LiaFileInvoiceDollarSolid size={50} />
          </i>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="text-sm font-bold text-blue/50">Total Saved</p>
            <p className="text-2xl font-extrabold text-blue"> ${data.pots[0].target}</p>
          </div>
        </div>

        <div className="grid h-auto w-full grid-cols-2 gap-4 md:w-3/5">
          {data.pots.slice(0, 4).map((pot) => {
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className={`item-start flex flex-col justify-between border-l-4 pl-2`}
              >
                <p className="text-nowrap text-sm font-semibold text-blue/70">{pot.name}</p>
                <p className="text-xs font-extrabold text-blue">${pot.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
