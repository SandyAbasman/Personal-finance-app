import React from 'react'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import UpperBox from './UpperBox'

export default function Pot() {
  const totalSaved = data.pots.reduce((sum, pot) => sum + pot.total, 0)

  return (
    <div className="flex flex-col justify-between md:gap-6 gap-4 w-full h-auto bg-white p-6 rounded-lg">
      <UpperBox title="Pot" leftText="See Details" />
      <div className="flex flex-col md:flex-row justify-between gap-4 items-stretch md:items-center w-full h-auto">
        <div className="md:w-2/5 w-full h-auto flex flex-row bg-background justify-start rounded-lg items-center gap-4 py-6 px-4">
          <div className="w-14 h-14 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
            <i className="text-green">
              <LiaFileInvoiceDollarSolid size={30} />
            </i>
          </div>
          <div className="flex flex-col justify-between gap-2 items-start">
            <p className="text-blue/50 text-sm font-semibold">Total Saved</p>
            <p className="font-extrabold text-2xl text-blue">${Math.round(totalSaved)}</p>
          </div>
        </div>

        <div className="md:w-3/5 w-full h-auto grid grid-cols-2 gap-4">
          {data.pots.slice(0, 4).map((pot) => {
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className="flex flex-col pl-3 justify-between item-start border-l-4 py-2 bg-background rounded"
              >
                <p className="text-blue/70 text-nowrap text-sm font-semibold">{pot.name}</p>
                <p className="font-extrabold text-xs text-blue">${pot.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
