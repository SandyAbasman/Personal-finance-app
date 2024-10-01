import React, { useState } from 'react'
import data from '../utilis/data.json'
import ReactPaginate from 'react-paginate'
import dayjs from 'dayjs'
import { RiArrowDropRightFill, RiArrowDropLeftFill } from 'react-icons/ri'

export default function Transaction() {
  const transactionData = data.transactions
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const currentItems = transactionData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(transactionData.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transactionData.length
    setItemOffset(newOffset)
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((ele, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-4">
                <img className="w-6 h-6 rounded-full" src={ele.avatar} alt={ele.name} />
                <div>
                  <h3>{ele.name}</h3>
                  <p className="text-xs text-blue/50">{ele.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-xs font-bold ${ele.amount > 0 ? 'text-[green]' : 'text-red-600'}`}
                >
                  {ele.amount > 0 ? `+$${Math.abs(ele.amount)}` : `-$${Math.abs(ele.amount)}`}
                </p>
                <p className="text-xs text-blue/50">{dayjs(ele.date).format('DD MMM YYYY')}</p>
              </div>
            </div>
          ))}
      </>
    )
  }

  return (
    <div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex gap-x-2 justify-center relative my-4"
        pageClassName="flex items-center flex-col"
        pageLinkClassName="border py-1 px-4 rounded-md"
        previousClassName="border py-1 px-2 rounded-md absolute left-0"
        nextClassName="border py-1 px-2 rounded-md absolute right-0"
        activeLinkClassName="bg-black text-white"
        nextLabel={
          <span className="flex gap-x-2 items-center">
            Next
            <RiArrowDropRightFill className="text-2xl" />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        pageCount={pageCount}
        previousLabel={
          <span className="flex gap-x-2 items-center">
            <RiArrowDropLeftFill className="text-2xl" />
            Prev
          </span>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
