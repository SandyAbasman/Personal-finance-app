import React from 'react'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

export default function Pots() {
  const totalSaved = data.pots.reduce((sum, pot) => sum + pot.total, 0)
  const totalTarget = data.pots.reduce((sum, pot) => sum + pot.target, 0)

  return (
    <div className="w-full h-auto flex flex-col gap-6 p-4 md:p-6">
      <h2 className="text-blue font-bold text-2xl md:text-3xl">Pots</h2>

      <div className="w-full bg-white p-6 rounded-lg">
        <div className="flex flex-row bg-background justify-start rounded-lg items-center gap-4 py-6 px-4 mb-6">
          <i className="text-green">
            <LiaFileInvoiceDollarSolid size={50} />
          </i>
          <div className="flex flex-col justify-between gap-2 items-start">
            <p className="text-blue/50 text-sm font-semibold">Total Saved</p>
            <p className="font-extrabold text-2xl text-blue">${totalSaved.toFixed(2)}</p>
            <p className="text-blue/50 text-xs">of ${totalTarget.toFixed(2)} target</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.pots.map((pot) => {
            const percentage = (pot.total / pot.target) * 100
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className="flex flex-col gap-3 p-4 border-l-4 bg-background rounded-lg hover:bg-background/80 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue/70 text-sm font-semibold mb-1">{pot.name}</p>
                    <p className="font-extrabold text-lg text-blue">
                      ${pot.total.toFixed(2)} / ${pot.target.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div
                    style={{
                      backgroundColor: pot.theme,
                      width: `${Math.min(percentage, 100)}%`,
                    }}
                    className="h-3 rounded-full transition-all"
                  ></div>
                </div>
                <p className="text-xs text-blue/50">{percentage.toFixed(1)}% complete</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
