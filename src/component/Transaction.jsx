import React from 'react'
import UpperBox from './UpperBox'

export default function Transaction() {
  return (
    <div className="flex  flex-col justify-between gap-6  bg-white  p-6 rounded-lg">
      <UpperBox title="Transaction" leftText="View More" />
    </div>
  )
}
