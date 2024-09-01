import React from 'react'
import CurrentBalance from '../component/CurrentBalance'
import data from '../utilis/data.json'

export default function Overview() {
  return (
    <div className="flex flex-col gap-3 bg-background">
      <CurrentBalance heading="Current balance" amount={data.balance.current} />
    </div>
  )
}
