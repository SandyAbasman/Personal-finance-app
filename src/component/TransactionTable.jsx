import React from 'react'
import data from '../utilis/data.json'
import dayjs from 'dayjs'

export default function TransactionTable() {
  return (
    <table className="w-full flex flex-col  ">
      <tr className="w-full flex-1 flex flex-row border-b  border-1  border-grey-100  text-grey-500 text-[12px] font-[400]  px-0 py-200 mb-150 items-center justify-start gap-400 ">
        <td className=" flex flex-1 flex-row justify-start items-center gap-200  text-grey-500 text-[12px] font-[400] ">
          Recipient / Sender
        </td>
        <td className="w-[120px] flex flex-col justify-center items-start gap-[6px]  text-grey-500 text-[12px] font-[400]">
          Category
        </td>
        <td className="w-[120px]  text-grey-500 text-[12px] font-[400] ">Transaction Date</td>
        <td className="text-right text-nowrap w-[200px] flex justify-center items-end gap-100 flex-col  text-grey-500 text-[12px] font-[400]">
          Amount
        </td>
      </tr>
      {data.transactions.slice(0, 10).map((item) => {
        return (
          <tr
            key={item.name}
            className="   flex flex-row  self-stretch    text-gray-300 text-[12px]  font-[400]  border-b  border-1  border-gray-100  items-center justify-between gap-400 px-0  py-200"
          >
            <td className="w-full flex flex-1 flex-row  items-center gap-200 pl-100 ">
              <img src={item.avatar} alt={item.name} className="w-400 h-400 rounded-full" />
              <p className="text-nowrap text-[14px]  text-grey-500 font-[700] "> {item.name}</p>
            </td>
            <td className="w-[120px] flex flex-col justify-center items-start gap-[6px]  text-grey-300 text-[12px] font-[400]">
              {item.category}
            </td>
            <td className="w-[120px] flex flex-col items-start gap-100 text-grey-300 text-[12px] font-[400] ">
              {dayjs(item.date).format('DD MMM YYYY')}
            </td>
            <td className="text-right text-nowrap w-[200px] flex justify-center items-end gap-100 flex-col ">
              <p
                className={`text-[14px] font-[700] ${item.amount > 0 ? 'text-green' : 'text-grey-900'}`}
              >
                {item.amount > 0 ? `+$${Math.abs(item.amount)}` : `-$${Math.abs(item.amount)}`}
              </p>
            </td>
          </tr>
        )
      })}
    </table>
  )
}
